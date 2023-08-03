"use client";

import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import Image from "next/image";
import { Space } from "../common/Space";
import remove from "../../../public/image/remove.svg";
import add from "../../../public/image/add.svg";

interface Props {
  id: number;
  title: string;
  point: number;
  img?: string;
  type: number;
  totalDraw: number;
  userDraw: number;
  draw: number[];
  checkDrawPossible: (point: number) => boolean;
  setDraw: Dispatch<SetStateAction<number[]>>;
}

export default function GiftItem({
  id,
  title,
  point,
  img,
  type,
  totalDraw,
  userDraw,
  draw,
  checkDrawPossible,
  setDraw,
}: Props) {
  const increaseQuantity = () => {
    if (checkDrawPossible(point)) {
      let newDraw = [...draw];
      newDraw[id - 1] += 1;
      setDraw(newDraw);
    }
  };

  const decreaseQuantity = () => {
    if (draw[id - 1] <= 0) return;
    let newDraw = [...draw];
    newDraw[id - 1] -= 1;
    setDraw(newDraw);
  };

  return (
    <Wrapper type={type}>
      <DrawCount>
        현재 응모 수 {totalDraw}번 / 내 응모 {userDraw}번
      </DrawCount>
      <Space h={10} />
      <Title>{title}</Title>
      <Space h={4} />
      <Point>{point}p</Point>
      <Space h={9} />
      <TempImg />
      <Space h={4} />
      <Flex style={{ gap: "30px" }}>
        <ImageContainer onClick={decreaseQuantity}>
          <Image alt="remove" src={remove} />
        </ImageContainer>

        <Quantity>{draw[id - 1]}</Quantity>
        <ImageContainer onClick={increaseQuantity}>
          <Image alt="add" src={add} />
        </ImageContainer>
      </Flex>
    </Wrapper>
  );
}

const Wrapper = styled.div<{ type: number }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
  width: 45%;
  max-width: 168px;
  border-radius: 6px;
  padding: 9px 0 11px 0;
  height: 228.2px;

  background: ${({ type }) =>
    type === 1
      ? "linear-gradient(180deg, #e7c367 0%, #f2e1b2 50.52%, #c79824 100%)"
      : type === 2
      ? "linear-gradient(180deg, #B7B7B7 0%, #F5F5F5 50.52%, #717171 100%)"
      : "linear-gradient(180deg, #B6A67E 0%, #F6EED7 50.52%, #826E3E 100%)"};
`;

const DrawCount = styled.div`
  color: #ffffff;
  font-family: Spoqa Han Sans Neo;
  font-size: 9px;
  font-weight: 400;
  letter-spacing: -0.36px;
`;

const Title = styled.div`
  max-width: 120px;
  word-break: keep-all;
  color: #1f1f1f;
  font-family: Spoqa Han Sans Neo;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: -0.64px;
  text-align: center;
`;

const Point = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 18px;
  border-radius: 9.5px;
  background: #1f1f1f;

  color: #ffffff;
  font-family: Spoqa Han Sans Neo;
  font-size: 12px;
  font-weight: 500;
`;

const TempImg = styled.div`
  width: 110px;
  height: 110px;
  opacity: 0.5;
  background: #ffffff;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 37px;
`;

const Quantity = styled.div`
  color: #ffffff;
  font-family: Spoqa Han Sans Neo;
  font-size: 22px;
`;

const ImageContainer = styled.button`
  width: 18px;
  height: 27.5px;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;
