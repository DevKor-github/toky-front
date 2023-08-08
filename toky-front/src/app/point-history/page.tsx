"use client";
import TopBar from "@/components/common/TopBar";
import PointHistoryList from "@/components/point-history/PointHistoryList";
import withAuth from "@/lib/withAuth";

function PointHistory() {
  return (
    <>
      <TopBar title="적립/사용 내역" />
      <PointHistoryList />
    </>
  );
}

export default withAuth(PointHistory);
