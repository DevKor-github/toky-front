"use client";
import { styled } from "styled-components";
import Link from "next/link";
import Logo from "../../../public/image/logo.svg";
import Image from "next/image";
import { easeInOut, motion } from "framer-motion";
import MainArrow from "../../../public/image/MainArrow.svg";

export default function MainTopBar() {
  return (
    //<MainTopBarWrapper>
    <MainTopBarWrapper
      className="MainTopBarWrapper"
      initial={{
        opacity: 0,
        y: -90,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{ duration: 1.2, ease: easeInOut }}
    >
      <Image
        src={Logo}
        alt="logo"
        width={89}
        style={{
          position: "absolute",
          left: "5%",
          top: "45%",
          transform: "translate(0, -50%)",
        }}
      />
      <Link
        href="/bets"
        style={{
          position: "absolute",
          right: "5%",
          top: "50%",
          transform: "translate(0%, -50%)",
          display: "flex",
          alignItems: "center",
        }}
      >
        <h4
          style={{
            fontFamily: "Spoqa Han Sans Neo",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "20px",
            letterSpacing: "-0.06em",
            marginRight: "10px",
          }}
        >
          바로가기
        </h4>
        <Image src={MainArrow} alt="main arrow" width={9} height={14} />
      </Link>
    </MainTopBarWrapper>
    //</MainTopBarWrapper>
  );
}

const MainTopBarWrapper = styled(motion.div)`
  position: fixed;
  color: white;
  min-width: 375px;
  width: 100%;
  height: 58px;
  background: #121212;
  box-shadow: 0px 4px 4px rgba(18, 18, 18, 0.25);
  z-index: 3;
`;
