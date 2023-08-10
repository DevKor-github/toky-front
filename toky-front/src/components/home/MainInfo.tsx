"use client";

import TokyCharacter from "../../../public/image/MainPageCharacter2.png";
import KoreaWaterMark from "../../../public/image/KoreaWaterMark.png";
import YonseiWaterMark from "../../../public/image/YonseiWaterMark.png";

import ScrollArrow from "../../../public/image/scroll.svg";

import axios from "axios";
import { styled } from "styled-components";
import { useEffect, useState } from "react";
import Image from "next/image";
import { easeIn, easeInOut, motion } from "framer-motion";
import MainTokyTitle from "./MainTokyTitle";

export default function MainInfo() {
  const [korea, setKorea] = useState(0);
  const [yonsei, setYonsei] = useState(0);
  const people = korea + yonsei;

  const fetchParitcipants = async () => {
    const res = await axios.get(
      process.env.NEXT_PUBLIC_API_URL + "/bets/participants"
    );
    const data = await res.data;
    setKorea(data.korea);
    setYonsei(data.yonsei);
  };

  useEffect(() => {
    fetchParitcipants();
  });

  return (
    <MainBackground>
      <BgBlur />

      <UniLogoWrapper>
        <UniLogos>
          {/* 학교 로고 애니메이션 부분 */}
          <motion.div
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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: easeInOut, delay: 0.5 }}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          bottom: "0%",
        }}
      >
        <Image
          src={TokyCharacter}
          fill
          style={{
            verticalAlign: "bottom",
            objectFit: "cover",
            objectPosition: "bottom",
            maxWidth: "1390px",
            margin: "0 auto",
          }}
          alt="toky character"
          priority={true}
          quality={100}
        ></Image>
      </motion.div>
      {/* 메인 내부 정보들 및 애니메이션 */}
      <MainInfoWrapper>
        <motion.div
          style={{
            zIndex: "1",
            paddingTop: "8vh",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: easeInOut }}
        >
          <div
            style={{
              fontSize: "14px",
              fontWeight: 400,
              fontStyle: "normal",
              lineHeight: "normal",
              letterSpacing: "-0.84px",
              textAlign: "center",
            }}
          >
            고려대학교 vs 연세대학교
          </div>

          <MainTokyTitle />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: easeInOut, delay: 0.5 }}
          style={{ zIndex: "1", marginTop: "5vh" }}
        >
          <div
            style={{
              textAlign: "center",
              fontSize: 22,
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "140%",
              letterSpacing: "-0.88px",
            }}
          >
            {"정기전 승부예측 하고"}
            <br />
            {"아이패드 받자 !"}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: easeInOut, delay: 1.2 }}
          style={{
            position: "absolute",
            width: "100%",
            textAlign: "center",
            bottom: 73,
          }}
        >
          <Participants>
            현재 <Bold>{people}명</Bold>이 승부예측에 참여했어요
          </Participants>
          <Participants>
            <Bold>{korea}명</Bold>이 고려대학교, <Bold>{yonsei}명</Bold>이
            연세대학교 학생이에요.
          </Participants>
        </motion.div>
      </MainInfoWrapper>
      <motion.div
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
  height: 95vh;
  background: linear-gradient(
    180deg,
    rgba(18, 18, 18, 0) 0%,
    rgba(65, 17, 144, 0.56) 100%
  );

  padding-top: 58px;
  position: relative;
`;
const BgBlur = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0%;
  left: 0%;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.9) 0%,
    rgba(0, 0, 0, 0) 100%
  );
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
  color: white;
  position: relative;
  width: 100%;
  height: 100%;
`;

const Participants = styled.div`
  text-align: center;
  text-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  font-size: 13px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

const Bold = styled.span`
  text-align: center;
  text-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
