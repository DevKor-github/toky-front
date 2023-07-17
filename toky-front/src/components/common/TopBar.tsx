"use client";
import { useEffect, useRef, Dispatch, SetStateAction } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styled from "styled-components";
import LeftArrow from "../../../public/image/leftArrow.webp";
import Menu from "../../../public/image/menu.svg";
import SideBarBody from "./SideBarBody";

interface Props {
  title: string;
  isBarOpen: boolean;
  setIsBarOpen: Dispatch<SetStateAction<boolean>>;
}

export default function TopBar({ title, isBarOpen, setIsBarOpen }: Props) {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

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
      <Title>{title}</Title>
      <MenuButton src={Menu} alt="menu" onClick={handleMenuClick} />
      <SideBarBody isBarOpen={isBarOpen} ref={inside} />
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

const MenuButton = styled(Image)`
  position: absolute;
  right: 20px;
  bottom: 23px;
`;
