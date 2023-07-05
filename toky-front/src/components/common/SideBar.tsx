import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import Hamburger from "../../../public/image/Hamburger.png";
import SideBarBody from "./SideBarBody";

const Wrapper = styled.div``;

const MenuButton = styled.button`
  padding: 5px 3px 0px 3px;
  background-color: #121212;
  border-radius: 2px;
  &:hover {
    background-color: #555555;
  }
  &:active {
    background-color: #888888;
  }
`;

export default function SideBar({
  handleMenuClick,
  style,
}: {
  handleMenuClick: () => void;
  style?: any;
}) {
  return (
    <Wrapper>
      <MenuButton onClick={handleMenuClick} style={style}>
        <Image
          src={Hamburger}
          alt="menu"
          style={{ margin: "0px 20px 2px 20px" }}
        />
      </MenuButton>
    </Wrapper>
  );
}
