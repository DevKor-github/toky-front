"use client";

import TokyCharacter from "../../../public/image/Logo.webp";
import KoreaWaterMark from "../../../public/image/KoreaWaterMark.png";
import YonseiWaterMark from "../../../public/image/YonseiWaterMark.png";
import TokyTitle from "../../../public/image/title1.png";
import TokyTitle2 from "../../../public/image/title2.png";
import ScrollArrow from "../../../public/image/scroll.svg";
import { keyframes, styled } from "styled-components";
import Image from "next/image";
import { easeIn, easeInOut, easeOut, motion } from "framer-motion";
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
      {/* 메인 내부 정보들 및 애니메이션 */}
      <MainInfoWrapper>
        <motion.div
          className="MainTitle"
          style={{ marginTop: 33, marginBottom: 44 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: easeInOut }}
        >
          <h5>고려대학교 vs 연세대학교</h5>
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
          />
        </motion.div>
        <motion.div
          className="MainCatchphrase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: easeInOut, delay: 0.5 }}
        >
          <h3>
            정기전 승부예측 하고 <br></br> 아이패드 받자
          </h3>
        </motion.div>
        <motion.div
          className="LogoContainer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: easeInOut, delay: 0.5 }}
        >
          <Image src={TokyCharacter} alt="toky character"></Image>
        </motion.div>
        <motion.div
          className="Participants"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: easeInOut, delay: 1.2 }}
        >
          <h5> 현재 {people}명이 승부예측에 참여했어요</h5>
          <h5>
            {korea}명이 고려대학교, {yonsei}명이 연세대학교 학생이에요.
          </h5>
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
  min-width: 390px;
  min-height: 657px;
  background: linear-gradient(
    180deg,
    rgba(18, 18, 18, 0) 0%,
    rgba(65, 17, 145, 0.56) 100%
  );
  height: 90vh;
  padding-top: 50px;
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
  text-align: center;
  align-items: center;
  margin-top: 52px;
`;

// const MainCatchphrase = styled.div`
//   margin-top: 43px;
// `;

// const LogoContainer = styled.div``;

// const Participants = styled.div``;
