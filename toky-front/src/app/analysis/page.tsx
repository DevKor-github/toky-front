"use client";
import AnalBanner from "@/components/analysis/AnalBanner";
import AnalFooter from "@/components/analysis/AnalFooter";
import AnalNavBar from "@/components/analysis/AnalNavBar";
import { TIME } from "@/components/analysis/Data";
import PlayerInfo from "@/components/analysis/PlayerInfo";
import PredictInfo from "@/components/analysis/PredictInfo";
import ScoreInfo from "@/components/analysis/ScoreInfo";
import AnalyzeCheer from "@/components/analysis/total/AnalyzeCheer";
import AnalyzeList from "@/components/analysis/total/AnalyzeList";
import AnalyzeHome from "@/components/analysis/total/AnaylzeHome";
import NavigationBar from "@/components/common/NavigationBar";
import PageTransitionWrapper from "@/components/common/PageTransition";
import { ProgressCheck } from "@/components/common/ProgressCheck";
import { useEffect, useState } from "react";

export default function Analysis() {
  const [match, setMatch] = useState<number>(5);
  const handleMatch = (m: number) => {
    setMatch(m);
  };
  const [matchProgress, setMatchProgress] = useState<number>(0);
  useEffect(() => {
    if (ProgressCheck(TIME[match])) {
      setMatchProgress(0);
    } else {
      setMatchProgress(1);
    }
  }, [match]);
  return (
    <>
      <NavigationBar />
      <PageTransitionWrapper>
        <AnalNavBar match={match} handleMatch={handleMatch} />
        <AnalBanner match={match} progress={matchProgress} />

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
            {/* <PredictInfo match={match} /> */}
            <AnalFooter />
          </>
        )}
      </PageTransitionWrapper>
    </>
  );
}
