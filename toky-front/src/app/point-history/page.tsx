"use client";
import TopBar from "@/components/common/TopBar";
import PointHistoryList from "@/components/point-history/PointHistoryList";
import client from "@/lib/httpClient";
import withAuth from "@/lib/withAuth";
import { useEffect, useState } from "react";
export interface IHistory {
  detail: string;
  usedPoint: number;
  remainedPoint: number;
  createdAt: string;
}
function PointHistory() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [historyList, setHistoryList] = useState<IHistory[]>([]);
  async function getHistory() {
    const historyResponse = await client.get("/points/history?page=1");
    const historyData = historyResponse.data;
    const allHistoryArray = historyData.map((h: IHistory) => {
      return {
        detail: h.detail,
        usedPoint: h.usedPoint,
        remainedPoint: h.remainedPoint,
        createdAt: h.createdAt,
      } as IHistory;
    });
    setHistoryList(allHistoryArray);
    setIsLoading(false);
  }
  useEffect(() => {
    getHistory();
  }, []);
  return (
    <>
      {isLoading && <div>loading</div>}
      {!isLoading && (
        <>
          {" "}
          <TopBar title="적립/사용 내역" />
          <PointHistoryList historyList={historyList} />
        </>
      )}
    </>
  );
}

export default withAuth(PointHistory);
