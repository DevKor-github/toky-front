"use client";
import TopBar from "@/components/common/TopBar";
import UserPoint from "@/components/draw/UserPoint";
import DrawGift from "@/components/draw/DrawGift";
import Policy from "@/components/draw/Policy";
import withAuth from "@/lib/withAuth";
import { useContext, useEffect, useState } from "react";
import client from "@/lib/httpClient";

function Draw() {
  const [remainingPoint, setRemainingPoint] = useState<number>(0);
  const [totalPoint, setTotalPoint] = useState<number>(0);
  useEffect(() => {
    try {
      client.get("/points").then((res) => {
        const result = res.data;
        setRemainingPoint(result.remainingPoint);
        setTotalPoint(result.totalPoint);
      });
    } catch (e) {
      throw e;
    }
  }, []);

  return (
    <>
      <TopBar title="내 포인트" />
      <UserPoint remainingPoint={remainingPoint} totalPoint={totalPoint} />
      <DrawGift remainingPoint={remainingPoint} />
      <Policy />
    </>
  );
}
export default withAuth(Draw);
