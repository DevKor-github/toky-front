"use client";
import AnalBanner from "@/components/analysis/AnalBanner";
import AnalFooter from "@/components/analysis/AnalFooter";
import PlayerInfo from "@/components/analysis/PlayerInfo";
import PredictInfo from "@/components/analysis/PredictInfo";
import ScoreInfo from "@/components/analysis/ScoreInfo";
import NavigationBar from "@/components/common/NavigationBar";

export default function Analysis() {
  return (
    <>
      <NavigationBar />
      <AnalBanner />
      <ScoreInfo />
      <PlayerInfo />
      <PredictInfo />
      <AnalFooter />
    </>
  );
}
