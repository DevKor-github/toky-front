"use client";
import AnalBanner from "@/components/analysis/AnalBanner";
import AnalyzeCheer from "@/components/analysis/total/AnalyzeCheer";
import AnalyzeList from "@/components/analysis/total/AnalyzeList";
import AnalyzeNavBar from "@/components/analysis/total/AnalyzeNavBar";
import AnalyzeHome from "@/components/analysis/total/AnaylzeHome";
import NavigationBar from "@/components/common/NavigationBar";
import { useState } from "react";

export default function Analyze() {
  //통일성을 위해 5를 total로 줌

  return (
    <div style={{ position: "relative" }}>
      <NavigationBar />
      <AnalyzeNavBar />
      <AnalyzeHome />
      <AnalyzeList />
      <AnalyzeCheer />
    </div>
  );
}
