"use client";
import TopBar from "@/components/common/TopBar";
import PointHistoryList from "@/components/point-history/PointHistoryList";
import client from "@/lib/httpClient";
import withAuth from "@/lib/withAuth";
import { useEffect } from "react";
interface IHistory {
  detail: string;
  usedPoint: number;
  remainedPoint: number;
  createdAt: Date;
}
function PointHistory() {
  async function getHistory() {
    const historyRespoinse = await client.get("/points/history?page=1");
    // const;
  }
  useEffect(() => {
    getHistory();
  }, []);
  return (
    <>
      <TopBar title="적립/사용 내역" />
      <PointHistoryList />
    </>
  );
}

export default withAuth(PointHistory);
