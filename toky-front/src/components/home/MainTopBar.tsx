"use client";

import { styled } from "styled-components";
import Link from "next/link";
import Logo from "../../../public/image/Logo.webp";
import Image from "next/image";

export default function MainTopBar() {
  return (
    <MainTopBarWrapper>
      <Image
        src={Logo}
        alt="logo"
        width={89}
        height={35}
        style={{
          position: "absolute",
          left: "5%",
          top: "70%",
          transform: "translate(0, -50%)",
        }}
      />
      <Link
        href="/bets/0"
        style={{
          position: "absolute",
          right: "5%",
          top: "70%",
          transform: "translate(0%, -50%)",
        }}
      >
        <h3>바로가기</h3>
      </Link>
    </MainTopBarWrapper>
  );
}
const MainTopBarWrapper = styled.div`
  position: fixed;
  color: white;
  width: 100%;
  height: 96px;
  background: #121212;
  box-shadow: 0px 4px 4px rgba(18, 18, 18, 0.25);
  z-index: 5;
`;
