"use client";

import { usePathname, useRouter } from "next/navigation";
import styled from "styled-components";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Logo from "../../../public/image/logo.svg";
import Menu from "../../../public/image/menu.svg";
import SideBarBody from "./SideBarBody";

export default function NavigationBar() {
  const pathname = usePathname();
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
  const handleMenuClick = () => {
    setIsBarOpen(true);
  };
  return (
    <Wrapper>
      <Image src={Logo} alt="logo" />
      <NavigationWrapper>
        <div style={{ display: "flex", gap: 23 }}>
          <NavigationItem
            selected={pathname === "/analysis"}
            onClick={() => {
              router.push("/analysis");
            }}
          >
            전력분석
          </NavigationItem>
          <NavigationItem
            selected={pathname === "/bets"}
            onClick={() => router.push("/bets")}
          >
            승부예측
          </NavigationItem>
          <NavigationItem
            selected={pathname === "/ranking"}
            onClick={() => router.push("/ranking")}
          >
            랭킹
          </NavigationItem>
        </div>
        <Image src={Menu} alt="menu" onClick={handleMenuClick} />
        <SideBarBody isBarOpen={isBarOpen} ref={inside} />
      </NavigationWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  top: 0px;
  width: 100%;
  height: 46px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 23px;
  background-color: #121212;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  z-index: 10;
`;

const NavigationWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
`;

const NavigationItem = styled.div<{ selected: boolean }>`
  display: flex;
  align-items: center;
  height: 46px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.38);

  ${({ selected }) =>
    selected && "color: #ffffff; border-bottom: 3px solid #ffffff;"}
`;
