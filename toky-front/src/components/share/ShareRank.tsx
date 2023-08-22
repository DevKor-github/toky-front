"use client";
import { css, styled } from "styled-components";
import { useContext, useEffect, useRef, useState } from "react";
import AuthContext from "../common/AuthContext";
import { ModalContainer, ModalWrapper, SaveArea } from "./SharePrediction";
import ShareFooter from "./ShareFooter";
import ShareBtn from "./ShareBtn";
import { TokyKoreaCharacter, TokyYonseiCharacter } from "./TokyCharater";

interface RankProps {
  clickModal: () => void;
  totalRank: number;
  myRank: number;
}
export default function ShareRank({
  clickModal,
  totalRank,
  myRank,
}: RankProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const percentage = Math.ceil((myRank / totalRank) * 100);
  const [tokyImgUrl, setTokyImgUrl] = useState(
    "/image/ShareToky/KoreaToky/KoreaToky0.png"
  );
  const authCtx = useContext(AuthContext);
  const univ = authCtx.university === "고려대학교" ? 0 : 1;

  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let randomToky = Math.floor(Math.random() * 13);
    if (univ === 0) {
      randomToky = Math.floor(Math.random() * 14);
      setTokyImgUrl(TokyKoreaCharacter[randomToky].imgUrl);
    } else {
      setTokyImgUrl(TokyYonseiCharacter[randomToky].imgUrl);
    }
  }, []);

  const renderPredictCard = () => {
    return (
      <SaveArea id="rankingCard">
        <ModalContainer>
          <ShareCardWrapper ref={ref}>
            <ShareCard $univ={univ}>
              <UserContainer className="userContainer" $univ={univ}>
                <h3>{authCtx.nickname}님은</h3>
                <div className="percent">
                  <h2>
                    누적 포인트 <strong>상위{percentage}%</strong>
                  </h2>
                </div>
              </UserContainer>

              <ShareFooter />
              <ImageContainer>
                <img
                  src={tokyImgUrl}
                  alt="character"
                  style={{
                    width: "289px",
                    verticalAlign: "bottom",
                    zIndex: "1000",
                    borderRadius: "15px",
                  }}
                />
                <BottomBlur />
              </ImageContainer>
              <RankContainer>
                <h3>{totalRank}명 중</h3>
                <h2>{myRank}등</h2>
              </RankContainer>
            </ShareCard>
          </ShareCardWrapper>
          <ShareBtn
            imgRef={ref}
            clickModal={clickModal}
            setIsLoading={setIsLoading}
            mode={1}
          />
        </ModalContainer>
      </SaveArea>
    );
  };

  return (
    <>
      <ModalWrapper>
        {!isLoading && renderPredictCard()}
        {isLoading && <h1>loading</h1>}
      </ModalWrapper>
    </>
  );
}

const ImageContainer = styled.div`
  position: absolute;
  bottom: 0%;
`;
const UserContainer = styled.div<{ $univ: number }>`
  z-index: 1002;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  width: 207px;
  height: 26px;
  border-radius: 26px;
  text-align: center;
  margin-top: 47px;
  line-height: 27px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .percent {
    width: 147px;
    height: 27px;
    border-radius: 26px;

    background: ${(props) =>
      props.$univ === 0
        ? "rgba(243, 35, 60, 0.70);"
        : "rgba(41, 72, 255, 0.7);"};
    color: var(--white-0, #fff);
  }
  h2 {
    font-size: 15px;
    font-weight: 500;
    line-height: 27px;
    letter-spacing: -0.9px;
    strong {
      font-weight: 700;
    }
  }
  h3 {
    color: ${(props) => (props.$univ === 0 ? "#F3233C;" : "#2948FF;")};
  }
`;

const ShareCard = styled.div<{ $univ: number }>`
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
    props.$univ === 0 &&
    css`
      background: linear-gradient(0deg, #f84853 0%, #ffb1b1 100%);
    `}
  ${(props) =>
    props.$univ === 1 &&
    css`
      background: linear-gradient(180deg, #8bd5ff 0%, #445fff 100%);
    `}
 
  & h3 {
    font-size: 14px;
    font-family: "Spoqa Han Sans Neo";
    font-weight: 500;
    letter-spacing: -0.56px;
    text-align: center;
  }
`;

const RankContainer = styled.div`
  z-index: 1002;
  position: absolute;
  bottom: 59px;
  left: 50%;
  transform: translate(-50%, 0);
  & h3 {
    color: var(--87, rgba(255, 255, 255, 0.87));
    font-style: normal;
  }
  & h2 {
    color: var(--white-0, #fff);
    text-align: center;
    font-family: "Spoqa Han Sans Neo";
    font-size: 26px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
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

const BottomBlur = styled.div`
  width: 289px;
  height: 132px;
  border-radius: 15px 15px 0px 0px;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.76) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  position: absolute;
  bottom: 0%;
`;
