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
    } catch (e) {
      throw e;
    }
  }
  async function getAllDraw() {
    try {
      const drawResponse = await client.get("/points/draw/all");
      const drawData = drawResponse.data;
      await drawData.map((c: IRawDrawCount) => {
        const draw: IDrawCount = {
          giftId: c.giftid,
          drawCount: Number(c.drawcount),
        };
        setAllDrawParticipants(allDrawParticipants.concat(draw));
      });
    } catch (e) {
      throw e;
    }
  }

  useEffect(() => {
    getMyPoint().then(() => setIsPointLoading(false));
    getAllDraw().then(() => {
      setIsDrawLoading(false);
    });
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
