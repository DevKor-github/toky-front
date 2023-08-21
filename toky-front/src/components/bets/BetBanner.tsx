"use client";
//import "./BetBanner.css";
import Image from "next/image";
import { css, styled } from "styled-components";
import KLogo from "./../../../public/image/koreaLogo.png";
import YLogo from "./../../../public/image/yonseiLogo.png";
import ShareArrow from "../../../public/image/ShareArrow.svg";
import { useState } from "react";
import Help from "../../../public/image/help.svg";
import PointTip from "./PointTip";
import ModalPortal from "../common/ModalPortal";

interface BannerProps {
  match: number;
  matchProgress: boolean;
  clickModal: () => void;
}
export default function BetBanner({
  match,
  clickModal,
  matchProgress,
}: BannerProps) {
  const matchTime = [
    {
      date: "09/08(금)",
      time: "11:30",
    },
    {
      date: "09/08(금)",
      time: "15:30",
    },
    {
      date: "09/08(금)",
      time: "17:30",
    },
    {
      date: "09/09(토)",
      time: "09:30",
    },
    {
      date: "09/09(토)",
      time: "12:30",
    },
  ];
  const matchImage = [
    "/image/bannerimage.jpeg",
    "/image/bannerimage.jpeg",
    "/image/bannerimage.jpeg",
    "/image/bannerimage.jpeg",
    "/image/bannerimage.jpeg",
  ];

  const matchProgressString = matchProgress ? "예측 진행중" : "예측 마감";
  const [showPointTip, setShowPointTip] = useState<boolean>(false);
  function clickPointTip() {
    setShowPointTip((prev) => !prev);
  }

  return (
    <>
      <BannerWrapper>
        <Banner>
          {/* <ImgContainer> */}
          <Background></Background>
          <Image
            src={matchImage[match]}
            fill
            style={{ objectFit: "cover", zIndex: "0" }}
            alt="bannerImage"
          />
          {/* </ImgContainer> */}
          <ProgressBox matchProgress={matchProgress}>
            {matchProgressString}
          </ProgressBox>
          <MatchInfo>
            <UniLogo style={{ justifyContent: "flex-end" }}>
              <H3>고려대학교</H3>
              <ImageContainer>
                <Image src={KLogo} width={30} height={42} alt="koreaUniLogo" />
              </ImageContainer>
            </UniLogo>
            <TimeInfo>
              <H4>{matchTime[match].time}</H4>
              <H5>{matchTime[match].date}</H5>
            </TimeInfo>
            <UniLogo>
              <ImageContainer>
                <Image src={YLogo} width={40} height={40} alt="koreaUniLogo" />
              </ImageContainer>

              <H3>연세대학교</H3>
            </UniLogo>
          </MatchInfo>
          <BtnContainer>
            <ShareBtn onClick={clickModal}>
              내 예측 공유하기
              <Image
                src={ShareArrow}
                alt="share arrow"
                style={{ marginLeft: "4.69px" }}
              />
            </ShareBtn>
            <Img alt="help" src={Help} height={16} onClick={clickPointTip} />
          </BtnContainer>
          <ModalPortal isShowing={showPointTip}>
            <PointTip clickPointTip={clickPointTip} />,
          </ModalPortal>
        </Banner>
      </BannerWrapper>
    </>
  );
}
const BannerWrapper = styled.div`
  display: block;
  padding-top: 46px;
`;
const Banner = styled.div`
  height: 133px;
  position: relative;
  justify-content: center;
  color: white;
`;
const Background = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
  background: linear-gradient(
    360deg,
    rgba(18, 18, 18, 0.87) 0%,
    rgba(18, 18, 18, 0.58) 100%
  );
`;

const ProgressBox = styled.div<{ matchProgress: boolean }>`
  z-index: 2;
  position: absolute;
  box-sizing: border-box;
  top: 20%;
  left: 50%;
  line-height: 22px;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 22px;
  border-radius: 20px;
  background: rgba(249, 87, 106, 0.1);
  backdrop-filter: blur(2px);
  /* Note: backdrop-filter has minimal browser support */
  text-align: center;
  font-size: 12px;
  letter-spacing: -0.04em;
  ${(props) => {
    if (props.matchProgress) {
      return css`
        border: 0.5px solid #f95669;
        color: #fe6c7d;
      `;
    } else {
      return css`
        border: 0.5px solid gray;
        color: gray;
      `;
    }
  }}
`;
const MatchInfo = styled.div`
  position: absolute;
  z-index: 2;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
`;
const UniLogo = styled.div`
  display: flex;
  align-items: center;
  width: 130px;
`;
const TimeInfo = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 23px;
  margin-right: 23px;
`;
const H3 = styled.h3`
  margin-left: 12px;
  margin-right: 12px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.04em;
`;
const H4 = styled.h4`
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  color: #fdfdfd;
  text-align: center;
`;
const H5 = styled.h5`
  text-align: center;
  font-size: 11px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: -0.44px;
  color: var(--white-0, #fff);
`;

const ShareBtn = styled.button`
  border-radius: 3.45px;
  border: 0.862px solid var(--87, rgba(255, 255, 255, 0.87));
  width: 108px;
  height: 29px;
  background-color: transparent;
  z-index: 1;

  color: var(--87, rgba(255, 255, 255, 0.87));
  text-align: center;
  font-family: Spoqa Han Sans Neo;
  font-size: 11.813px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.472px;
`;

const BtnContainer = styled.div`
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-54px, -50%);
  z-index: 2;
  display: flex;
  align-items: center;
`;
const ImageContainer = styled.div`
  height: 42px;
  display: flex;
  align-items: center;
`;

const Img = styled(Image)`
  margin-left: 8px;
`;
