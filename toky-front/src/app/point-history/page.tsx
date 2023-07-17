"use client";
import TopBar from "@/components/common/TopBar";
import PointHistoryList from "@/components/point-history/PointHistoryList";

export default function PointHistory() {
  return (
    <>
      <TopBar title="적립/사용 내역" />
      <PointHistoryList />
    </>
  );
}
