"use client";

import { usePathname, useRouter } from "next/navigation";
import styled from "styled-components";
import Image from "next/image";
import Logo from "../../../public/image/logo.svg";
import SideBar from "./SideBar";

export default function NavigationBar() {
  const pathname = usePathname();
  const router = useRouter();

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
        <SideBar />
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
