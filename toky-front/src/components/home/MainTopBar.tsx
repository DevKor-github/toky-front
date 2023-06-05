"use client";
import "./MainTopBar.css";
import { styled } from "styled-components";
import Link from "next/link";
import Logo from "../../../public/image/Logo.webp";
import Image from "next/image";
import { easeInOut, motion } from "framer-motion";
import MainArrow from "../../../public/image/MainArrow.svg";

export default function MainTopBar() {
  return (
    //<MainTopBarWrapper>
    <motion.div
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
        height={35}
        style={{
          position: "absolute",
          left: "5%",
          top: "50%",
          transform: "translate(0, -50%)",
        }}
      />
      <Link
        href="/bets/0"
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
    </motion.div>
    //</MainTopBarWrapper>
  );
}

// const MainTopBarWrapper = styled.div`
//   position: fixed;
//   color: white;
//   width: 100%;
//   height: 96px;
//   background: #121212;
//   box-shadow: 0px 4px 4px rgba(18, 18, 18, 0.25);
//   z-index: 5;
// `;
