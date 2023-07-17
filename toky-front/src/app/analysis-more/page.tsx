"use client";
import styled from "styled-components";
import { useState } from "react";
import ResponsiveBox from "@/components/common/ResponsiveBox";
import TopBar from "@/components/common/TopBar";
import PlayerInfo from "@/components/analysis-more/PlayerInfo";
import Article from "@/components/analysis-more/Article";

export default function AnalysisMore() {
  const [isBarOpen, setIsBarOpen] = useState(false);

  return (
    <Wrapper className={isBarOpen ? "open" : ""}>
      <TopBar
        title="전력분석 더 알아보기"
        isBarOpen={isBarOpen}
        setIsBarOpen={setIsBarOpen}
      />
      <PlayerInfo />
      <Article />
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
