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
  const [myDrawParticipants, setMyDrawParticipants] = useState<IDrawCount[]>(
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
  async function getAllandMyDraw() {
    try {
      const drawResponse = await client.get("/points/draw");
      const allDrawData = drawResponse.data[0];
      const myDrawData = drawResponse.data[1];
      const allDrawArray: IDrawCount[] = allDrawData.map((c: IRawDrawCount) => {
        return {
          giftId: c.giftid,
          drawCount: Number(c.drawcount),
        } as IDrawCount;
      });
      const myDrawArray: IDrawCount[] = myDrawData.map((c: IRawDrawCount) => {
        return {
          giftId: c.giftid,
          drawCount: Number(c.drawcount),
        } as IDrawCount;
      });
      setAllDrawParticipants(allDrawArray);
      setMyDrawParticipants(myDrawArray);
      setIsDrawLoading(false);
    } catch (e) {
      throw e;
    }
  }
  useEffect(() => {
    getMyPoint();
    // getAllDraw();
    // getMyDraw();
    getAllandMyDraw();
  }, []);

  const render = () => {
    return (
      <>
        <TopBar title="내 포인트" />
        <UserPoint remainingPoint={remainingPoint} totalPoint={totalPoint} />
        <DrawGift
          remainingPoint={remainingPoint}
          allDrawParticipants={allDrawParticipants}
          myDrawParticipants={myDrawParticipants}
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
