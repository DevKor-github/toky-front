"use client";
import { css, styled } from "styled-components";
import { useContext, useEffect, useRef, useState } from "react";
import html2canvas from "html2canvas";
import client from "@/lib/httpClient";
import AuthContext from "../common/AuthContext";

export interface ShareProps {
  clickModal: () => void;
}
interface predictionData {
  numWinKorea: number;
  numWinYonsei: number;
  numDraw: number;
}
export default function SharePrediction({ clickModal }: ShareProps) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  /*
  고정값 테스트용
  const data = {
    numWinKorea: 2,
    numWinYonsei: 1,
    numDraw: 2,
  };
  let winKorea = false;
  let draw = false;
  if (data.numWinKorea == data.numWinYonsei) draw = true;
  else if (data.numWinKorea > data.numWinYonsei) winKorea = true;*/
  const [data, setPredictionData] = useState<predictionData | null>(null);
  const [winKorea, setWinKorea] = useState<boolean>(false);
  const [draw, setDraw] = useState<boolean>(false);
  const [completePredict, setCompletePredict] = useState<boolean>(false);
  const authCtx = useContext(AuthContext);
  async function getShare() {
    const response = await client.get("/bets/share");
    const result = response.data;
    setPredictionData(result);
    const total = result.numWinKorea + result.numWinYonsei + result.numDraw;
    if (total >= 5) setCompletePredict(true);
    if (result.numWinKorea == result.numWinYonsei) setDraw(true);
    else if (result.numWinKorea > result.numWinYonsei) setWinKorea(true);
    setIsLoading(false);
  }
  useEffect(() => {
    //예측을 완료해주세요 창만들기
    //여기 수정해주세용
    getShare();
  }, []);

  const ref = useRef<HTMLDivElement>(null);
  const downloadImage = async () => {
    if (ref.current === null) return;
    setIsLoading(true);

    const canvas = await html2canvas(ref.current, {
      allowTaint: true,
      removeContainer: true,
      useCORS: true,
      scale: 4,
      imageTimeout: 15000,
    });
    const imgUrl = canvas.toDataURL("image/png", 1.0);
    fakelinkDownload(imgUrl, "my-prediction");
    setIsLoading(false);
  };
  const fakelinkDownload = (blob: string, fileName: string) => {
    const fakeLink = window.document.createElement("a");
    fakeLink.download = fileName;
    fakeLink.href = blob;
    document.body.appendChild(fakeLink);
    fakeLink.click();
    document.body.removeChild(fakeLink);
    fakeLink.remove();
  };

  const shareImage = async () => {
    if (ref.current === null) return;
    const canvas = await html2canvas(ref.current, {
      allowTaint: true,
      removeContainer: true,
      useCORS: true,
      scale: 4,
      imageTimeout: 15000,
    });
    const imgUrl = canvas.toDataURL("image/png", 1.0);
    const blob = await (await fetch(imgUrl)).blob();

    const filesArray = [
      new File([blob], "my-prediction.png", {
        type: "image/png",
        lastModified: new Date().getTime(),
      }),
    ];
    const shareData = {
      files: filesArray,
    };
    if (navigator.canShare && navigator.canShare(shareData)) {
      await navigator.share(shareData);
    } else {
      alert("지원되지 않는 브라우저입니다. 모바일 크롬으로 접속해주세요!");
    }
  };

  const renderPredictCard = () => {
    return (
      <SaveArea id="predictionCard">
        <ModalContainer>
          <ShareCardWrapper ref={ref}>
            <ShareCard $winKorea={winKorea} $draw={draw}>
              <UserContainer className="userContainer">
                <h3>{authCtx.nickname}님의 예측</h3>
              </UserContainer>

              <ScoreContainer>
                <h4>고려대학교</h4>
                {data !== null && <h2 className="score">{data.numWinKorea}</h2>}
                <h1>:</h1>
                {data !== null && (
                  <h2 className="score">{data.numWinYonsei}</h2>
                )}
                <h4>연세대학교</h4>
              </ScoreContainer>

              <Footer>
                <h4>2023정기전 승부예측 토키</h4>
                <img
                  src="/image/divider.svg"
                  alt="divider"
                  style={{
                    width: "1px",
                    marginRight: "7px",
                    marginLeft: "7px",
                  }}
                />
                <h4>@toky_official</h4>
              </Footer>
              <ImageContainer>
                <img
                  src="/image/ShareCharacter.png"
                  alt="character"
                  style={{
                    width: "289px",
                    verticalAlign: "bottom",
                    zIndex: "1000",
                  }}
                />
              </ImageContainer>
            </ShareCard>
          </ShareCardWrapper>
          <BtnContainer>
            <Btn onClick={clickModal}>
              <img
                src="/image/ShareClose.svg"
                alt="close icon"
                style={{
                  width: "26px",
                  paddingTop: "5px",
                }}
              />
            </Btn>
            <Btn onClick={downloadImage}>
              <img
                src="/image/DownloadIcon.svg"
                alt="Download icon"
                style={{
                  width: "26px",
                  paddingTop: "4px",
                }}
              />
            </Btn>
            <Btn onClick={shareImage}>
              <img
                src="/image/ShareIcon.svg"
                alt="Share icon"
                style={{
                  width: "30px",
                  paddingTop: "8px",
                }}
              />
            </Btn>
          </BtnContainer>
        </ModalContainer>
      </SaveArea>
    );
  };
  const notCompletePrediction = () => {
    return (
      <NotCompleteModalContainer>
        <p>예측을 완료해주세요</p>
        <CheckContainer onClick={clickModal}>확인</CheckContainer>
      </NotCompleteModalContainer>
    );
  };

  return (
    <>
      <ModalWrapper>
        {!completePredict && !isLoading && notCompletePrediction()}
        {completePredict && !isLoading && renderPredictCard()}
        {completePredict && isLoading && <h1>loading</h1>}
      </ModalWrapper>
    </>
  );
}
export const ModalWrapper = styled.div`
  z-index: 10;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(2px);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const SaveArea = styled.div`
  width: 500px;
  height: 1000px;
`;

const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 15px;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImageContainer = styled.div`
  position: absolute;
  bottom: 0%;
`;
const UserContainer = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  width: 207px;
  height: 26px;
  border-radius: 26px;
  text-align: center;
  margin-top: 30px;
  line-height: 27px;
`;

const ScoreContainer = styled.div`
  z-index: 1001;
  width: 207px;
  position: absolute;
  top: 13%;
  left: 50%;
  transform: translate(-50%, 0);

  margin-top: 17px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  & h4 {
    text-align: center;
    font-size: 12px;
    font-family: Spoqa Han Sans Neo;
    font-weight: 500;
    letter-spacing: -0.48px;
  }
  & h1 {
    text-align: center;
    font-size: 35px;
    font-family: Spoqa Han Sans Neo;
    font-weight: 700;
  }
`;
const BtnContainer = styled.div`
  /* margin-top: 18px; */
  display: flex;
  justify-content: space-between;
  width: 207px;
  transform: translateY(-100%);
`;

const Btn = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 1px solid var(--87, rgba(255, 255, 255, 0.87));
  background: transparent;
  text-align: center;
`;
const Footer = styled.div`
  position: absolute;
  width: 100%;
  left: 50%;
  bottom: 8%;
  transform: translate(-50%, 0);
  z-index: 1002;
  margin-top: 274px;
  display: flex;
  justify-content: center;
  & h4 {
    color: var(--87, rgba(255, 255, 255, 0.87));
    text-align: center;
    font-size: 10px;
    font-family: Spoqa Han Sans Neo;
    font-weight: 500;
    letter-spacing: -0.6px;
  }
`;

const ShareCard = styled.div<{ $winKorea: boolean; $draw: boolean }>`
  position: relative;
  /* display: flex;
  flex-direction: column;
  align-items: center; */
  border-radius: 15px;
  width: 289px;
  height: 430px;
  flex-shrink: 0;
  color: var(--white-0, #fff);

  ${(props) =>
    props.$winKorea &&
    css`
      background: linear-gradient(0deg, #f84853 0%, #ffb1b1 100%);
    `}
  ${(props) =>
    !props.$winKorea &&
    css`
      background: linear-gradient(180deg, #8bd5ff 0%, #445fff 100%);
    `}
  ${(props) =>
    props.$draw &&
    css`
      background: gray;
    `}
  & h3 {
    font-size: 14px;
    font-family: Spoqa Han Sans Neo;
    font-weight: 500;
    letter-spacing: -0.56px;
    text-align: center;
  }
  .userContainer {
    ${(props) =>
      props.$winKorea &&
      css`
        background: var(--38, rgba(255, 255, 255, 0.38));
        color: var(--red, #f3233c);
      `}
    ${(props) =>
      !props.$winKorea &&
      css`
        background: var(--125, rgba(255, 255, 255, 0.38));
        color: var(--blue, #445fff);
      `}
    ${(props) =>
      props.$draw &&
      css`
        background: #b0a5a5;
        color: black;
      `}
  }
  .score {
    border-radius: 4px;
    padding: 0 3px;
    text-align: center;
    font-family: "Spoqa Han Sans Neo";
    font-size: 38px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    ${(props) =>
      props.$winKorea &&
      css`
        background: var(--87, rgba(255, 255, 255, 0.87));
        color: #f9555e;
      `}
    ${(props) =>
      !props.$winKorea &&
      css`
        background: var(--125, rgba(255, 255, 255, 0.38));
        color: var(--blue, #445fff);
      `}
    ${(props) =>
      props.$draw &&
      css`
        background: #b0a5a5;
        color: black;
      `}
  }
`;

const ShareCardWrapper = styled.div`
  width: 400px;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
`;

export const NotCompleteModalContainer = styled.div`
  border-radius: 6px;
  background: var(--white-0, #fff);
  /* 그림자 */
  box-shadow: 0px 4px 4px 0px rgba(18, 18, 18, 0.25);
  width: 350px;
  height: 214px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  p {
    color: var(--black-6, #2c2c2c);
    font-family: Spoqa Han Sans Neo;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -1.2px;
    margin-top: 68px;
  }
`;
export const CheckContainer = styled.button`
  width: 310px;
  height: 46px;
  border-radius: 4px;
  background: #4c0eb0;
  margin-top: 51px;
`;
