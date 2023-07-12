"use client";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styled from "styled-components";
import LeftArrow from "../../../public/image/leftArrow.webp";
// import SideBar from "../common/SideBar";

export default function DrawTopBar() {
  const router = useRouter();
  const [isBarOpen, setIsBarOpen] = useState(false);
  const inside = useRef<any>();
  useEffect(() => {
    const handlerOutside = (e: any) => {
      if (!inside.current.contains(e.target)) {
        setIsBarOpen(false);
      }
    };
    document.addEventListener("mousedown", handlerOutside);
    return () => {
      document.removeEventListener("mousedown", handlerOutside);
    };
  });

  const handleBack = () => {
    router.back();
  };
  const handleMenuClick = () => {
    setIsBarOpen(true);
  };

  return (
    <TopBarWrapper>
      <Image
        style={{
          position: "absolute",
          left: "16px",
          bottom: "20px",
          cursor: "pointer",
        }}
        onClick={handleBack}
        src={LeftArrow}
        alt="back"
        width={20}
      />
      <Title>내 포인트</Title>
      {/* <SideBar
        handleMenuClick={handleMenuClick}
        style={{
          position: "absolute",
          right: "0px",
          bottom: "18px",
          backgroundColor: "#222222",
        }}
      /> */}
    </TopBarWrapper>
  );
}

const TopBarWrapper = styled.div`
  position: relative;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #222222;
`;

const Title = styled.div`
  color: rgba(255, 255, 255, 0.87);
  font-size: 18px;
  font-family: Spoqa Han Sans Neo;
  font-weight: 400;
  letter-spacing: -1.08px;
`;
