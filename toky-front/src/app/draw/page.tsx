"use client";
import TopBar from "@/components/common/TopBar";
import UserPoint from "@/components/draw/UserPoint";
import DrawGift from "@/components/draw/DrawGift";
import Policy from "@/components/draw/Policy";
import withAuth from "@/lib/withAuth";
import { useContext, useEffect, useState } from "react";
import client from "@/lib/httpClient";
import AuthContext from "@/components/common/AuthContext";
export interface IDrawCount {
  giftId: number;
  drawCount: number;
}
interface IRawDrawCount {
  giftid: number;
  drawcount: string;
}
function Draw() {
  const authCtx = useContext(AuthContext);
  const [isDrawLoading, setIsDrawLoading] = useState<boolean>(true);
  const [allDrawParticipants, setAllDrawParticipants] = useState<IDrawCount[]>(
    []
  );
  const [myDrawParticipants, setMyDrawParticipants] = useState<IDrawCount[]>(
    []
  );
  async function getAllandMyDraw() {
    try {
      const drawResponse = await client.get("/points/draw");
      console.log(drawResponse.data);
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
    if (authCtx.nickname === "") {
      client
        .get("/auth/profile")
        .then((res) => res.data)
        .then((user) => {
          authCtx.setNickname(user.name);
          const uni = user.university === 0 ? "고려대학교" : "연세대학교";
          authCtx.setUniv(uni);
          authCtx.setScore(user.score);
          authCtx.setRemain(user.remain);
          authCtx.setPhoneNum(user.phoneNumber);
        })
        .catch((err) => {
          window.location.href = "/login";
        });
    }
    getAllandMyDraw();
  }, []);

  const render = () => {
    return (
      <>
        <TopBar title="내 포인트" />
        <UserPoint remainingPoint={authCtx.remain} totalPoint={authCtx.score} />
        <DrawGift
          remainingPoint={authCtx.remain}
          allDrawParticipants={allDrawParticipants}
          myDrawParticipants={myDrawParticipants}
        />
        <Policy />
      </>
    );
  };
  return (
    <>
      {isDrawLoading && <div>loading</div>}
      {!isDrawLoading && render()}
    </>
  );
}
export default withAuth(Draw);
