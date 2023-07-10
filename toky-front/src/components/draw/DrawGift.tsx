"use client";
import { useState } from "react";
import styled from "styled-components";
import { Space } from "../common/Space";
import GiftItem from "./GiftItem";
import DrawModal from "./DrawModal";

export default function DrawGift() {
  const totalPoint = 2000;
  const [pointUse, setPointUse] = useState<number>(0);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const checkDrawPossible = (point: number) => {
    if (totalPoint - pointUse - point < 0) return false;
    return true;
  };

  const addPointUse = (point: number) => {
    setPointUse((pointUse) => pointUse + point);
  };

  const onClickDraw = () => {
    setModalOpen(true);
  };

  return (
    <>
      <Wrapper>
        <span className="title">경품 응모하기</span>
        <Space h={11} />
        <div className="description">
          - 포인트를 사용해서 원하는 상품에 응모할 수 있습니다.
        </div>
        <div className="description">
          - 당첨자 발표는 2023년 9월 30일 문자를 통해 개별 공지됩니다.
        </div>
        <Space h={21} />
        <Flex>
          {mockGift.map((gift, idx) => (
            <GiftItem
              key={idx}
              {...gift}
              addPointUse={addPointUse}
              checkDrawPossible={checkDrawPossible}
            />
          ))}
        </Flex>
        <Space h={20} />
        <Flex
          style={{ justifyContent: "space-between", alignContent: "center" }}
        >
          <span className="point">응모 시 잔여 포인트</span>
          <span className="point" style={{ fontSize: 20 }}>
            {totalPoint - pointUse}p
          </span>
        </Flex>
        <Space h={8} />
        <Divider />
        <Space h={8} />
        <Flex
          style={{ justifyContent: "space-between", alignContent: "center" }}
        >
          <span className="point" style={{ color: "#ffffff" }}>
            사용 포인트
          </span>
          <span className="point" style={{ fontSize: 20, color: "#ffffff" }}>
            {pointUse}p
          </span>
        </Flex>
        <Space h={11} />
        <DrawButton onClick={onClickDraw}>응모하기</DrawButton>
      </Wrapper>
      {modalOpen && <DrawModal closeModal={() => setModalOpen(false)} />}
    </>
  );
}

const Wrapper = styled.div`
  padding: 24px 20px 34px 20px;
  background: #222222;

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

const mockGift = [
  {
    title: "애플워치 (1명)",
    point: 300,
    img: "",
    type: 1,
  },
  {
    title: "애플워치 (1명)",
    point: 300,
    img: "",
    type: 2,
  },
  {
    title: "애플워치 (1명)",
    point: 300,
    img: "",
    type: 2,
  },
  {
    title: "애플워치 (1명)",
    point: 300,
    img: "",
    type: 2,
  },
  {
    title: "스타벅스 아메리카노 (10명)",
    point: 100,
    img: "",
    type: 3,
  },
];
