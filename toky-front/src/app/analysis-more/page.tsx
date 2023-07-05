"use client";
import styled from "styled-components";
import { useState, useRef, useEffect } from "react";
import ResponsiveBox from "@/components/common/ResponsiveBox";
import SideBarBody from "@/components/common/SideBarBody";
import AnalMoreTopBar from "@/components/analysis-more/AnalMoreTopBar";
import PlayerInfo from "@/components/analysis-more/PlayerInfo";
import Article from "@/components/analysis-more/Article";

export default function AnalysisMore() {
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

  return (
    <>
      <Wrapper className={isBarOpen ? "open" : ""}>
        <AnalMoreTopBar setIsBarOpen={setIsBarOpen} />
        <PlayerInfo />
        <Article />
      </Wrapper>
      <SideBarBody ref={inside} isBarOpen={isBarOpen} />
    </>
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
