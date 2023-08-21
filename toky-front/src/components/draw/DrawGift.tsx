"use client";
import React, { useContext, useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { Space } from "../common/Space";
import GiftItem from "./GiftItem";
import DrawModal from "./DrawModal";
import { IDrawCount } from "@/app/draw/page";
import client from "@/lib/httpClient";
import { ProgressCheck } from "../common/ProgressCheck";
import { Finish } from "../bets/QuestionList";
import ModalPortal from "../common/ModalPortal";
import AuthContext from "../common/AuthContext";
import TimeOutModal from "./TimeOutModal";

interface DrawGiftProps {
  remainingPoint: number;
  allDrawParticipants: Array<IDrawCount>;
  myDrawParticipants: Array<IDrawCount>;
}

export type modalStatusT = "success" | "fail" | "close";

export default function DrawGift({
  remainingPoint,
  allDrawParticipants,
  myDrawParticipants,
}: DrawGiftProps) {
  const drawDate = new Date("2023-09-16 23:59:59");
  const authCtx = useContext(AuthContext);
  const [modalStatus, setModalStatus] = useState<modalStatusT>("close");
  const [drawProgress, setDrawProgress] = useState<boolean>(ProgressCheck(drawDate));
  const [draw, setDraw] = useState<number[]>([0, 0, 0, 0, 0, 0]);
  const [totalDraw, setTotalDraw] = useState<number[]>([0, 0, 0, 0, 0, 0]);
  const [myDraw, setMyDraw] = useState<number[]>([0, 0, 0, 0, 0, 0]);

  const [timeOutModal, setTimeOutModal] = useState<boolean>(false);
  function clickTimeOutModal() {
    setTimeOutModal(!timeOutModal);
  }

  let totalDrawTemp = [0, 0, 0, 0, 0];
  let myDrawTemp = [0, 0, 0, 0, 0];
  useEffect(() => {
    allDrawParticipants.forEach((c) => {
      totalDrawTemp[c.giftId - 1] = c.drawCount;
    });
    myDrawParticipants.forEach((c) => {
      myDrawTemp[c.giftId - 1] = c.drawCount;
    });
    setTotalDraw(totalDrawTemp);
    setMyDraw(myDrawTemp);
  }, []);

  const pointUse = useMemo(() => {
    let sum = 0;
    gifts.forEach((gift, idx) => {
      sum += gift.point * draw[idx];
    });
    return sum;
  }, [draw]);

  const drawGifts = async () => {
    let draws = [];

    for (let i = 0; i < gifts.length; i++) {
      const gift = gifts[i];

      if (draw[gift.id - 1] < 1) continue;
      draws.push({
        giftId: gift.id,
        count: draw[gift.id - 1],
      });
    }

    try {
      const res = await client.post("/points/draw", { draws });
      return res;
    } catch (e) {
      console.log(e);
    }
  };

  const checkDrawPossible = (point: number) => {
    if (remainingPoint - pointUse - point < 0) return false;
    return true;
  };

  const onClickDraw = async () => {
    if (ProgressCheck(drawDate)) {
      const res = await drawGifts();
      if (res && res.data.message === "응모 기간이 아닙니다.") {
        clickTimeOutModal();
      } else if (res && res.status === 201) {
        setModalStatus("success");
        // all + my 업데이트
        totalDrawTemp = [...totalDraw];
        myDrawTemp = [...myDraw];
        let totalDrawChange = totalDrawTemp.map((d, i) => d + draw[i]);
        let myDrawChange = myDrawTemp.map((d, i) => d + draw[i]);
        setTotalDraw(totalDrawChange);
        setMyDraw(myDrawChange);
      } else setModalStatus("fail");
    }
  };

  const completeDraw = () => {
    authCtx.setRemain(authCtx.remain - pointUse);
    setDraw([0, 0, 0, 0, 0]);
  };

  return (
    <>
      <Wrapper>
        <div>
          <span className="title">경품 응모하기</span>
          <Space h={11} />
          <div className="description">- 포인트를 사용해서 원하는 상품에 응모할 수 있습니다.</div>
          <div className="description">
            - 당첨자 발표는 2023년 9월 16일 문자를 통해 개별 공지됩니다.
          </div>
          <Space h={21} />
          <Flex style={{ justifyContent: "center" }}>
            {gifts.map((gift, idx) => (
              <GiftItem
                key={idx}
                {...gift}
                totalDraw={totalDraw[idx]}
                userDraw={myDraw[idx]}
                draw={draw}
                checkDrawPossible={checkDrawPossible}
                setDraw={setDraw}
              />
            ))}
          </Flex>
          <Space h={20} />
          <Flex style={{ justifyContent: "space-between", alignContent: "center" }}>
            <span className="point">응모 시 잔여 포인트</span>
            <span className="point" style={{ fontSize: 20 }}>
              {remainingPoint - pointUse}p
            </span>
          </Flex>
          <Space h={8} />
          <Divider />
          <Space h={8} />
          <Flex style={{ justifyContent: "space-between", alignContent: "center" }}>
            <span className="point" style={{ color: "#ffffff" }}>
              사용 포인트
            </span>
            <span className="point" style={{ fontSize: 20, color: "#ffffff" }}>
              {pointUse}p
            </span>
          </Flex>
          <Space h={11} />
          <DrawButton onClick={onClickDraw}>응모하기</DrawButton>
        </div>
        {!drawProgress && <Finish />}
      </Wrapper>
      <ModalPortal isShowing={modalStatus !== "close"}>
        <DrawModal
          modalStatus={modalStatus}
          closeModal={() => setModalStatus("close")}
          completeDraw={completeDraw}
        />
      </ModalPortal>
      <ModalPortal isShowing={timeOutModal}>
        <TimeOutModal clickModal={clickTimeOutModal} />
      </ModalPortal>
    </>
  );
}

const Wrapper = styled.div`
  padding: 24px 20px 34px 20px;
  background: #222222;
  position: relative;
  .title {
    color: rgba(255, 255, 255, 0.87);
    font-family: Spoqa Han Sans Neo;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: -0.8px;
  }

  .description {
    color: rgba(255, 255, 255, 0.6);
    font-family: Spoqa Han Sans Neo;
    font-size: 10px;
    font-weight: 400;
    letter-spacing: -0.4px;
  }

  .point {
    color: rgba(255, 255, 255, 0.38);
    font-family: Spoqa Han Sans Neo;
    font-size: 13px;
    font-weight: 500;
  }
`;

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
`;

const Divider = styled.div`
  width: 100%;
  height: 0.5px;
  background-color: rgba(255, 255, 255, 0.15);
`;

const DrawButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 46px;
  border-radius: 4px;
  background: #4c0eb0;

  color: #ffffff;
  font-family: Spoqa Han Sans Neo;
  font-size: 16px;
  letter-spacing: -0.96px;
`;

const getTypeFromPoint = (point: number) => {
  if (point >= 300) return 1;
  else if (point > 100) return 2;
  else return 3;
};

interface giftT {
  id: number;
  title: string;
  point: number;
  img?: string;
  type: 1 | 2 | 3;
}

const gifts: giftT[] = [
  {
    id: 1,
    title: "애플워치 (1명)",
    point: 300,
    type: 1,
  },
  {
    id: 2,
    title: "애플워치 (1명)",
    point: 300,
    type: 2,
  },
  {
    id: 3,
    title: "애플워치 (1명)",
    point: 200,
    type: 2,
  },
  {
    id: 4,
    title: "애플워치 (1명)",
    point: 200,
    type: 2,
  },
  {
    id: 5,
    title: "스타벅스 아메리카노 (10명)",
    point: 100,
    type: 3,
  },
];
