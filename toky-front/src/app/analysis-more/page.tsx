"use client";
import TopBar from "@/components/common/TopBar";
import PlayerInfo from "@/components/analysis-more/PlayerInfo";
import Article from "@/components/analysis-more/Article";
import { useState } from "react";

export default function AnalysisMore() {
  return (
    <>
      <TopBar title="전력분석 더 알아보기" />
      <PlayerInfo />
      <Article />
    </>
  );
}
