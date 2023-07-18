"use client";
import Image from "next/image";
import { css, styled } from "styled-components";
//data 받아오기
import Charater from "../../../public/image/ShareCharacter.png";
import TestCharacter from "../../../public/image/TestCharacter.svg";
import Divider from "../../../public/image/divider.svg";
import ShareIcon from "../../../public/image/ShareIcon.svg";
import DownloadIcon from "../../../public/image/DownloadIcon.svg";
import CloseIcon from "../../../public/image/ShareClose.svg";
import { toPng } from "html-to-image";
import { useCallback, useEffect, useRef } from "react";

export interface ShareProps {
  clickModal: () => void;
}

export default function SharePrediction({ clickModal }: ShareProps) {
  const data = {
    numWinKorea: 2,
    numWinYonsei: 1,
    numDraw: 2,
  };
  let winKorea = false;
  let draw = false;
  if (data.numWinKorea == data.numWinYonsei) draw = true;
  else if (data.numWinKorea > data.numWinYonsei) winKorea = true;
  useEffect(() => {
    //safari first randering
    if (ref.current === null) {
      return;
    }
    toPng(ref.current, {
      cacheBust: true,
      filter: (node: any) => node.tagName !== "BUTTON",
    }).then(() => {
      return;
    });
  }, []);
  const ref = useRef<HTMLDivElement>(null);
  const downloadImage = useCallback(() => {
    if (ref.current === null) {
      return;
    }

    toPng(ref.current, {
      cacheBust: true,
      filter: (node: any) => node.tagName !== "BUTTON",
    }).then((dataUrl) => {
      const link = document.createElement("a");
      link.download = "my-prediction.png";
      link.href = dataUrl;
      link.click();
    });
  }, [ref]);

  const shareImage = useCallback(async () => {
    if (ref.current === null) {
      return;
    }

    toPng(ref.current, {
      cacheBust: true,
      filter: (node: any) => node.tagName !== "BUTTON",
    })
      .then(async (dataUrl) => {
        const blob = await (await fetch(dataUrl)).blob();
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
          alert("no");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ref]);

  return (
    <>
      <ModalWrapper>
        <SaveArea ref={ref} id="predictionCard">
          <ModalContainer>
            <ShareCard $winKorea={winKorea} $draw={draw}>
              <ImageContainer>
                <Image
                  src={TestCharacter}
                  alt="charater"
                  width={289}
                  style={{ verticalAlign: "bottom" }}
                ></Image>
              </ImageContainer>
              <UserContainer className="userContainer">
                <h3>유저이름최대열자열자님의 예측</h3>
              </UserContainer>

              <ScoreContainer>
                <h4>고려대학교</h4>
                <h2 className="score">{data.numWinKorea}</h2>
                <h1>:</h1>
                <h2 className="score">{data.numWinYonsei}</h2>
                <h4>연세대학교</h4>
              </ScoreContainer>

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
            </ShareCard>
            <BtnContainer>
              <Btn onClick={clickModal}>
                <Image
                  src={CloseIcon}
                  alt="cloase icon"
                  // width={26}
                  // height={28}
                  style={{ paddingTop: "5px" }}
                ></Image>
              </Btn>
              <Btn onClick={downloadImage}>
                <Image
                  src={DownloadIcon}
                  alt="Download icon"
                  // width={26}
                  // height={28}
                  style={{ paddingTop: "4px" }}
                ></Image>
              </Btn>
              <Btn onClick={shareImage}>
                <Image
                  src={ShareIcon}
                  alt="share icon"
                  width={26}
                  height={28}
                  style={{ paddingTop: "6px" }}
                ></Image>
              </Btn>
            </BtnContainer>
          </ModalContainer>
        </SaveArea>
      </ModalWrapper>
    </>
  );
}
const ModalWrapper = styled.div`
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
  z-index: 1;
  width: 207px;
  height: 26px;
  border-radius: 26px;
  text-align: center;
  margin-top: 30px;
  line-height: 27px;
`;

const ScoreContainer = styled.div`
  z-index: 1;
  width: 207px;

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
  margin-top: 18px;
  display: flex;
  justify-content: space-between;
  width: 207px;
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
  z-index: 1;
  margin-top: 274px;
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

const ShareCard = styled.div<{ $winKorea: boolean; $draw: boolean }>`
  position: relative;
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
