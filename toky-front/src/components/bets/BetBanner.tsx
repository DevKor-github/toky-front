"use client";
//import "./BetBanner.css";
import Image from "next/image";
import { styled } from "styled-components";
import BannerImage from "./../../../public/image/bannerimage.jpeg";
import KLogo from "./../../../public/image/koreaLogo.webp";
import YLogo from "./../../../public/image/yonseiLogo.webp";

interface BannerProps {
  match: number;
}
export default function BetBanner({ match }: BannerProps) {
  const matchTime = [
    {
      date: "9/8(금)",
      time: "11:30",
    },
    {
      date: "9/8(금)",
      time: "15:30",
    },
    {
      date: "9/8(금)",
      time: "17:30",
    },
    {
      date: "9/9(토)",
      time: "09:30",
    },
    {
      date: "9/9(토)",
      time: "12:30",
    },
  ];
  return (
    <BannerWrapper>
      <Banner>
        {/* <ImgContainer> */}
        <Background></Background>
        <Image
          src={BannerImage}
          fill
          style={{ objectFit: "cover", zIndex: "0" }}
          alt="bannerImage"
        />
        {/* </ImgContainer> */}
        <ProgressBox>예측 진행중</ProgressBox>
        <MatchInfo>
          <UniLogo>
            <H3>고려대학교</H3>
            <Image src={KLogo} width={40} alt="koreaUniLogo" />
          </UniLogo>
          <TimeInfo>
            <H4>{matchTime[match].date}</H4>
            <H5>{matchTime[match].time}</H5>
          </TimeInfo>
          <UniLogo>
            <Image src={YLogo} width={40} alt="koreaUniLogo" />
            <H3>연세대학교</H3>
          </UniLogo>
        </MatchInfo>
      </Banner>
    </BannerWrapper>
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

const ProgressBox = styled.div`
  z-index: 2;
  position: absolute;
  box-sizing: border-box;
  top: 20%;
  left: 50%;
  line-height: 20px;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 22px;
  border-radius: 20px;
  border: 0.5px solid #f95669;
  background: rgba(249, 87, 106, 0.1);
  backdrop-filter: blur(2px);
  /* Note: backdrop-filter has minimal browser support */
  text-align: center;
  font-size: 12px;
  letter-spacing: -0.04em;
  color: #fe6c7d;
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
`;
const H5 = styled.h5`
  font-style: normal;
  font-weight: 300;
  font-size: 11px;
  letter-spacing: -0.04em;
`;

{
  /* backgrou 이미지 넣고 logo image 넣고 시간 */
}
{
  /* 현재 x 명이 참여했어요!  */
}
