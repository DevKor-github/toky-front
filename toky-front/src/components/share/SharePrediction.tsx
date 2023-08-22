"use client";
import { css, styled } from "styled-components";
import { useContext, useEffect, useRef, useState } from "react";
import client from "@/lib/httpClient";
import AuthContext from "../common/AuthContext";
import Modal from "../common/Modal";
import {
  TokyDrawCharacter,
  TokyKoreaCharacter,
  TokyYonseiCharacter,
} from "./TokyCharater";
import ShareFooter from "./ShareFooter";
import ShareBtn from "./ShareBtn";

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
  const [data, setPredictionData] = useState<predictionData | null>(null);
  const [winKorea, setWinKorea] = useState<boolean>(false);
  const [draw, setDraw] = useState<boolean>(false);
  const [completePredict, setCompletePredict] = useState<boolean>(false);
  const [tokyImgUrl, setTokyImgUrl] = useState(
    "/image/ShareToky/KoreaToky/KoreaToky0.png"
  );
  const authCtx = useContext(AuthContext);
  async function getShare() {
    const response = await client.get("/bets/share");
    const result = response.data;
    let randomToky = Math.floor(Math.random() * 3);
    setPredictionData(result);
    const total = result.numWinKorea + result.numWinYonsei + result.numDraw;
    if (total >= 5) setCompletePredict(true);
    if (result.numWinKorea == result.numWinYonsei) {
      randomToky = Math.floor(Math.random() * 3);
      setTokyImgUrl(TokyDrawCharacter[randomToky].imgUrl);
      setDraw(true);
    } else if (result.numWinKorea > result.numWinYonsei) {
      randomToky = Math.floor(Math.random() * 14);
      setWinKorea(true);
      setTokyImgUrl(TokyKoreaCharacter[randomToky].imgUrl);
    } else {
      randomToky = Math.floor(Math.random() * 13);
      setTokyImgUrl(TokyYonseiCharacter[randomToky].imgUrl);
    }

    setIsLoading(false);
  }
  useEffect(() => {
    //예측을 완료해주세요 창만들기
    //여기 수정해주세용
    getShare();
  }, []);

  const ref = useRef<HTMLDivElement>(null);

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
              <ShareFooter />
              <ImageContainer>
                <img
                  src={tokyImgUrl}
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
          <ShareBtn
            imgRef={ref}
            clickModal={clickModal}
            setIsLoading={setIsLoading}
            mode={0}
          />
        </ModalContainer>
      </SaveArea>
    );
  };
  const notCompletePrediction = () => {
    return (
      <Modal clickModal={clickModal}>
        <p>예측을 완료해주세요</p>
      </Modal>
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
export const SaveArea = styled.div`
  width: 500px;
  height: 1000px;
`;
export const ModalContainer = styled.div`
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
  z-index: 1002;
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
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 1);
  }
  & h1 {
    text-align: center;
    font-size: 35px;
    font-family: Spoqa Han Sans Neo;
    font-weight: 700;
    text-shadow: 1px 1px 9px rgba(0, 0, 0, 0.5);
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
      background: linear-gradient(180deg, #f84853 0%, #ffb1b1 100%);
    `}
  ${(props) =>
    !props.$winKorea &&
    css`
      background: linear-gradient(180deg, #8bd5ff 0%, #445fff 100%);
    `}
  ${(props) =>
    props.$draw &&
    css`
      background: linear-gradient(
        360deg,
        #d0b2ff 0%,
        #7e41ff 100%,
        #6e2bff 100%
      );
    `}
  & h3 {
    font-size: 14px;
    font-family: Spoqa Han Sans Neo;
    font-weight: 500;
    letter-spacing: -0.56px;
    text-align: center;
  }
  .userContainer {
    background: var(--60, rgba(255, 255, 255, 0.6));

    ${(props) =>
      props.$winKorea &&
      css`
        color: var(--red, #f3233c);
      `}
    ${(props) =>
      !props.$winKorea &&
      css`
        color: var(--blue, #2948ff);
      `}
    ${(props) =>
      props.$draw &&
      css`
        color: #4c0eb0;
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
    background: var(--87, rgba(255, 255, 255, 0.87));

    ${(props) =>
      props.$winKorea &&
      css`
        color: #f9555e;
      `}
    ${(props) =>
      !props.$winKorea &&
      css`
        color: var(--blue, #445fff);
      `}
    ${(props) =>
      props.$draw &&
      css`
        color: #4c0eb0;
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
