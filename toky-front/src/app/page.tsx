import BetInfo from "@/components/home/BetInfo";
import DrawInfo from "@/components/home/DrawInfo";
import MainInfo from "@/components/home/MainInfo";
import MainFooter from "@/components/home/MainFooter";
import MainTopBar from "@/components/home/MainTopBar";
import PointInfo from "@/components/home/PointInfo";
import styled from "styled-components";

export default function Home() {
  return (
    <div>
      <MainTopBar />
      <MainInfo />
      <BetInfo />
      <PointInfo />
      <DrawInfo />
      <MainFooter />
    </div>
  );
}
