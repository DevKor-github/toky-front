"use client";

import { styled } from "styled-components";
import TokyCharacter from "../../../public/image/Logo.webp";
import KoreaWaterMark from "../../../public/image/KoreaWaterMark.png";
import YonseiWaterMark from "../../../public/image/YonseiWaterMark.png";
import TokyTitle from "../../../public/image/title1.png";
import TokyTitle2 from "../../../public/image/title2.png";

import Image from "next/image";
export default function MainInfo() {
  //사람들 수 받아오게
  let people = 100;
  let korea = 50;
  let yonsei = 50;
  return (
    <MainBackground>
      <UniLogoWrapper>
        <UniLogos>
          <Image
            src={KoreaWaterMark}
            alt="korea watermark"
            style={{ position: "absolute", top: "100" }}
          ></Image>
          <Image
            src={YonseiWaterMark}
            alt="yonsei watermark"
            style={{ position: "absolute", right: "0" }}
          ></Image>
        </UniLogos>
      </UniLogoWrapper>

      <MainInfoWrapper>
        <MaintTitle>
          <h5>고려대학교 vs 연세대학교</h5>
          <Image
            src={TokyTitle}
            alt="title1"
            width={262.24}
            height={27.17}
            style={{ marginBottom: "15.26px", marginTop: "23.5px" }}
          />
          <Image src={TokyTitle2} alt="title2" width={285.61} height={60.63} />
        </MaintTitle>
        <MainCatchphrase>
          <h3>
            정기전 승부예측 하고 <br></br> 아이패드 받자
          </h3>
        </MainCatchphrase>
        <LogoContainer>
          <Image src={TokyCharacter} alt="toky character"></Image>
        </LogoContainer>
        <Participants>
          <h5> 현재 {people}명이 승부예측에 참여했어요</h5>
          <h5>
            {korea}명이 고려대학교, {yonsei}명이 연세대학교 학생이에요.
          </h5>
        </Participants>
      </MainInfoWrapper>
    </MainBackground>
  );
}
const MainBackground = styled.div`
  min-width: 390px;
  background: linear-gradient(
    180deg,
    rgba(18, 18, 18, 0) 0%,
    rgba(65, 17, 145, 0.56) 100%
  );
  height: 95vh;
  padding-top: 96px;
  position: relative;
  //z-index: 0;
`;

const UniLogoWrapper = styled.div`
  position: absolute;
  width: 100%;
  top: 48%;
`;
const UniLogos = styled.div`
  position: relative;
`;
const MainInfoWrapper = styled.div`
  //z-index: 1;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
const MaintTitle = styled.div`
  width: 285.61px;
  height: 144.63px;
  margin-top: 33px;
`;

const MainCatchphrase = styled.div`
  margin-top: 43px;
`;

const LogoContainer = styled.div``;

const Participants = styled.div``;
