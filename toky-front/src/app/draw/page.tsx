"use client";
import { useState } from "react";
import styled from "styled-components";
import ResponsiveBox from "@/components/common/ResponsiveBox";
import TopBar from "@/components/common/TopBar";
import UserPoint from "@/components/draw/UserPoint";
import DrawGift from "@/components/draw/DrawGift";

export default function Draw() {
  const [isBarOpen, setIsBarOpen] = useState<boolean>(false);
  return (
    <Wrapper className={isBarOpen ? "open" : ""}>
      <TopBar
        title="내 포인트"
        isBarOpen={isBarOpen}
        setIsBarOpen={setIsBarOpen}
      />
      <UserPoint />
      <DrawGift />
    </Wrapper>
  );
}

const Wrapper = styled(ResponsiveBox)`
  position: absolute;
  background-color: #222222;
  right: 0;
  transition: 1s ease;
  padding: 0px;
  &.open {
    transition: 1s ease;
    right: 331px;
  }
`;
