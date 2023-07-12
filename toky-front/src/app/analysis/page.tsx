"use client";
import AnalBanner from "@/components/analysis/AnalBanner";
import AnalFooter from "@/components/analysis/AnalFooter";
import AnalNavBar from "@/components/analysis/AnalNavBar";
import PlayerInfo from "@/components/analysis/PlayerInfo";
import PredictInfo from "@/components/analysis/PredictInfo";
import ScoreInfo from "@/components/analysis/ScoreInfo";
import AnalyzeCheer from "@/components/analysis/total/AnalyzeCheer";
import AnalyzeList from "@/components/analysis/total/AnalyzeList";
import AnalyzeHome from "@/components/analysis/total/AnaylzeHome";
import NavigationBar from "@/components/common/NavigationBar";
import { useState } from "react";

export default function Analysis() {
  const [match, setMatch] = useState<number>(5);
  const handleMatch = (m: number) => {
    setMatch(m);
  };

  return (
    <>
      <NavigationBar />
      <AnalNavBar match={match} handleMatch={handleMatch} />
      <AnalBanner match={match} />

      {match === 5 && (
        <>
          <AnalyzeHome />
          <AnalyzeList />
          <AnalyzeCheer />
        </>
      )}
      {match !== 5 && (
        <>
          <ScoreInfo match={match} />
          <PlayerInfo match={match} />
          <PredictInfo match={match} />
          <AnalFooter />
        </>
      )}
    </>
  );
}
