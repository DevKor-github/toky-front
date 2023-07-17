"use client";

import TokyCharacter from "../../../public/image/MainPageCharater.png";
import KoreaWaterMark from "../../../public/image/KoreaWaterMark.png";
import YonseiWaterMark from "../../../public/image/YonseiWaterMark.png";
import TokyTitle from "../../../public/image/title1.png";
import TokyTitle2 from "../../../public/image/title2.png";
import ScrollArrow from "../../../public/image/scroll.svg";
import { keyframes, styled } from "styled-components";
import Image from "next/image";
import { easeIn, easeInOut, easeOut, motion } from "framer-motion";
import { relative } from "path";
export default function MainInfo() {
  //사람들 수 받아오게
  let people = 100;
  let korea = 50;
  let yonsei = 50;
  return (
    <MainBackground>
      <UniLogoWrapper>
        <UniLogos>
          {/* 학교 로고 애니메이션 부분 */}
          <motion.div
            className="KoreaWaterMark"
            initial={{
              x: -155,
            }}
            animate={{
              x: 0,
            }}
            transition={{ duration: 1.2, ease: easeInOut }}
          >
            <Image
              src={KoreaWaterMark}
              alt="korea watermark"
              style={{ position: "absolute", top: "100" }}
            ></Image>
          </motion.div>
          <motion.div
            className="YonseiWaterMark"
            initial={{
              x: 167,
            }}
            animate={{
              x: 0,
            }}
            transition={{ duration: 1.2, ease: easeInOut }}
          >
            <Image
              src={YonseiWaterMark}
              alt="yonsei watermark"
              style={{ position: "absolute", right: "0" }}
            ></Image>
          </motion.div>
        </UniLogos>
      </UniLogoWrapper>
      <motion.div
        className="CharaterContainer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: easeInOut, delay: 0.5 }}
        style={{
          width: "100%",
          height: "380px",
          position: "absolute",
          bottom: "0%",
          textAlign: "center",
        }}
      >
        <Image
          src={TokyCharacter}
          height={380}
          style={{ verticalAlign: "bottom" }}
          alt="toky character"
          priority={true}
        ></Image>
      </motion.div>
      {/* 메인 내부 정보들 및 애니메이션 */}
      <MainInfoWrapper>
        <motion.div
          className="MainTitle"
          style={{
            zIndex: "1",
            paddingTop: "8vh",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: easeInOut }}
        >
          <H5>고려대학교 vs 연세대학교</H5>
          <Image
            src={TokyTitle}
            alt="title1"
            width={262}
            height={27}
            style={{
              display: "block",
              margin: "23.5px auto 15.26px auto",
            }}
            quality={100}
          />
          <Image
            src={TokyTitle2}
            alt="title2"
            width={286}
            height={61}
            quality={100}
            style={{
              display: "block",
              margin: "0 auto ",
            }}
          />
        </motion.div>
        <motion.div
          className="MainCatchphrase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: easeInOut, delay: 0.5 }}
          style={{ zIndex: "1", marginTop: "5vh" }}
        >
          <H3>
            정기전 승부예측 하고 <br></br> 아이패드 받자
          </H3>
        </motion.div>

        <motion.div
          className="Participants"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: easeInOut, delay: 1.2 }}
          style={{ zIndex: "1", marginTop: "37vh" }}
        >
          <H5> 현재 {people}명이 승부예측에 참여했어요</H5>
          <H5>
            {korea}명이 고려대학교, {yonsei}명이 연세대학교 학생이에요.
          </H5>
        </motion.div>
      </MainInfoWrapper>
      <motion.div
        className="ScrollArrow"
        style={{
          position: "absolute",
          left: "50%",
          transform: "translate(-50%, 0%)",
          bottom: "-30px",
        }}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
          ease: easeIn,
          delay: 1.2,
        }}
      >
        <motion.div
          className="ScrollAnimation"
          animate={{ y: [-7, 5] }}
          transition={{
            delay: 2.2,
            duration: 0.4,
            repeat: Infinity,
            repeatType: "reverse",
            ease: easeIn,
          }}
        >
          <Image src={ScrollArrow} width={44} height={48} alt="scroll arrow" />
        </motion.div>
      </motion.div>
    </MainBackground>
  );
}
const MainBackground = styled.div`
  min-width: 375px;
  min-height: 657px;
  background: linear-gradient(
    180deg,
    rgba(18, 18, 18, 0) 0%,
    rgba(65, 17, 145, 0.56) 100%
  );
  height: 90vh;
  padding-top: 58px;
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
  position: relative;
  width: 100%;
  height: 100%;
`;

// const MainCatchphrase = styled.div`
//   margin-top: 43px;
// `;

// const LogoContainer = styled.div``;

// const Participants = styled.div``;

const ImageContainer = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
`;

const H5 = styled.h5`
  text-align: center;
`;

const H3 = styled.h3`
  text-align: center;
`;
