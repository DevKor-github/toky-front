"use client";
import Image from "next/image";
import { css, styled } from "styled-components";
//data 받아오기
import Charater from "../../../public/image/Logo.webp";
import Divider from "../../../public/image/divider.svg";
import ShareIcon from "../../../public/image/ShareIcon.svg";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";

export interface ShareProps {
  clickModal: () => void;
}

export default function SharePrediction({ clickModal }: ShareProps) {
  const data = {
    numWinKorea: 2,
    numWinYonsei: 2,
    numDraw: 1,
  };
  let winKorea = false;
  let draw = false;
  if (data.numWinKorea == data.numWinYonsei) draw = true;
  else if (data.numWinKorea > data.numWinYonsei) winKorea = true;
  const downloadImage = () => {
    var scale = 2;
    var card = document.querySelector("#predictionCard");

    if (card != null) {
      // const filter = (card: Element) => {
      //   return card.tagName !== "BUTTON";
      // };

      domtoimage
        .toBlob(card, {
          width: card.clientWidth * scale,
          height: card.clientHeight * scale,
          style: {
            transform: "scale(" + scale + ")",
            transformOrigin: "top left",
          },
          filter: (node: any) => node.tagName !== "BUTTON",
          bgcolor: "white",
        })
        .then((blob) => {
          saveAs(blob, "card.png");
        });
    }
  };
  const shareImage = async () => {
    var scale = 2;
    var card = document.querySelector("#predictionCard");
    if (card != null) {
      const blobImageAsset = domtoimage
        .toBlob(card, {
          width: card.clientWidth * scale,
          height: card.clientHeight * scale,
          style: {
            transform: "scale(" + scale + ")",
            transformOrigin: "top left",
          },
          filter: (node: any) => node.tagName !== "BUTTON",
          bgcolor: "transparent",
        })
        .then(async (blob) => {
          const filesArray = [
            new File([blob], `123.png`, {
              type: "image/png",
              lastModified: new Date().getTime(),
            }),
          ];
          const shareData = {
            title: `123`,
            files: filesArray,
          };
          if (navigator.canShare && navigator.canShare(shareData)) {
            await navigator.share(shareData);
          }
        });
    }
  };
  return (
    <>
      <ModalWrapper>
        <SaveArea id="predictionCard">
          <Card>
            <ModalContainer $winKorea={winKorea} $draw={draw}>
              <UserContainer>
                <h3>유저이름최대열자열자님의 예측</h3>
              </UserContainer>
              <ImageContainer>
                <Image
                  src={Charater}
                  alt="charater"
                  width={167}
                  height={177}
                ></Image>
              </ImageContainer>
              <ScoreContainer>
                <h4>고려대학교</h4>
                <h1>{data.numWinKorea}</h1>
                <h1>:</h1>
                <h1>{data.numWinYonsei}</h1>
                <h4>연세대학교</h4>
              </ScoreContainer>
              <button className="downloadBtn" onClick={downloadImage}>
                이미지 저장
              </button>
              <Footer>
                <h4>2023정기전 승부예측 토키</h4>
                <Image
                  src={Divider}
                  alt="divider"
                  width={0}
                  height={12}
                  style={{ marginRight: "7px", marginLeft: "7px" }}
                ></Image>

                <h4>@toky_official</h4>
              </Footer>
            </ModalContainer>
            <BtnContainer>
              <QuitBtn onClick={clickModal}></QuitBtn>
              <ShareBtn onClick={shareImage}>
                <Image
                  src={ShareIcon}
                  alt="share icon"
                  width={26.5}
                  height={26.8}
                  style={{
                    marginRight: "9px",
                    marginLeft: "24px",
                    marginBottom: "4px",
                  }}
                ></Image>
                공유하기
              </ShareBtn>
            </BtnContainer>
          </Card>
        </SaveArea>
      </ModalWrapper>
    </>
  );
}
const SaveArea = styled.div`
  width: 500px;
  height: 1000px;
`;

const UserContainer = styled.div`
  width: 207px;
  height: 26px;
  border-radius: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

const ScoreContainer = styled.div`
  width: 207px;

  margin-top: 18px;
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
const ImageContainer = styled.div`
  margin-top: 30px;
`;
const Footer = styled.div`
  margin-top: 28px;
  display: flex;
  & h4 {
    color: var(--87, rgba(255, 255, 255, 0.87));
    text-align: center;
    font-size: 10px;
    font-family: Spoqa Han Sans Neo;
    font-weight: 500;
    letter-spacing: -0.6px;
  }
`;

const Card = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 15px;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
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
const ModalContainer = styled.div<{ $winKorea: boolean; $draw: boolean }>`
  //margin: 5px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  ${UserContainer} {
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
`;
const BtnContainer = styled.div`
  margin-top: 18px;
  display: flex;
  justify-content: space-between;
  width: 207px;
`;
const QuitBtn = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 1px solid var(--87, rgba(255, 255, 255, 0.87));
  background: transparent;
`;

const ShareBtn = styled.button`
  display: flex;
  align-items: center;

  width: 149px;
  height: 48px;
  border-radius: 59px;
  border: 1px solid var(--87, rgba(255, 255, 255, 0.87));
  background-color: rgba(255, 255, 255, 0);

  color: var(--white-0, #fff);
  text-align: center;
  font-size: 17px;
  font-family: Spoqa Han Sans Neo;
  font-weight: 500;
  letter-spacing: -0.68px;
`;
