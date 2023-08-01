"use client";
import TopBar from "@/components/common/TopBar";
import UserPoint from "@/components/draw/UserPoint";
import DrawGift from "@/components/draw/DrawGift";
import Policy from "@/components/draw/Policy";
import withAuth from "@/lib/withAuth";
import { useContext, useEffect, useState } from "react";
import client from "@/lib/httpClient";
export interface IDrawCount {
  giftId: number;
  drawCount: number;
}
interface IRawDrawCount {
  giftid: number;
  drawcount: string;
}
function Draw() {
  const [remainingPoint, setRemainingPoint] = useState<number>(0);
  const [totalPoint, setTotalPoint] = useState<number>(0);
  const [isPointLoading, setIsPointLoading] = useState<boolean>(true);
  const [isDrawLoading, setIsDrawLoading] = useState<boolean>(true);
  const [allDrawParticipants, setAllDrawParticipants] = useState<IDrawCount[]>(
    []
  );
  async function getMyPoint() {
    try {
      const pointResponse = await client.get("/points");
      const pointData = pointResponse.data;
      setRemainingPoint(pointData.remainingPoint);
      setTotalPoint(pointData.totalPoint);
      setIsPointLoading(false);
    } catch (e) {
      throw e;
    }
  }
  async function getAllDraw() {
    try {
      const drawResponse = await client.get("/points/draw/all");
      const drawData = drawResponse.data;
      const array: IDrawCount[] = drawData.map((c: IRawDrawCount) => {
        return {
          giftId: c.giftid,
          drawCount: Number(c.drawcount),
        } as IDrawCount;
      });
      setAllDrawParticipants(array);
      setIsDrawLoading(false);
    } catch (e) {
      throw e;
    }
  }

  useEffect(() => {
    getMyPoint();
    getAllDraw();
  }, []);

  const render = () => {
    return (
      <>
        <TopBar title="내 포인트" />
        <UserPoint remainingPoint={remainingPoint} totalPoint={totalPoint} />
        <DrawGift
          remainingPoint={remainingPoint}
          allDrawParticipants={allDrawParticipants}
        />
        <Policy />
      </>
    );
  };
  return (
    <>
      {(isPointLoading || isDrawLoading) && <div>loading</div>}
      {!(isPointLoading || isDrawLoading) && render()}
    </>
  );
}
export default withAuth(Draw);
