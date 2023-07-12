"use client";

import { useState, Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import Image from "next/image";
import { Space } from "../common/Space";
import remove from "../../../public/image/remove.svg";
import add from "../../../public/image/add.svg";

interface Props {
  title: string;
  point: number;
  img: string;
  type: number;
  addPointUse: (point: number) => void;
  checkDrawPossible: (point: number) => boolean;
}

export default function GiftItem({
  title,
  point,
  img,
  type,
  addPointUse,
  checkDrawPossible,
}: Props) {
  const [quantity, setQuantity] = useState<number>(0);

  const increaseQuantity = () => {
    if (checkDrawPossible(point)) {
      setQuantity((quantity) => quantity + 1);
      addPointUse(point);
    }
  };

  const decreaseQuantity = () => {
    if (quantity <= 0) return;

    setQuantity((quantity) => quantity - 1);
    addPointUse(-point);
  };

  return (
    <Wrapper type={type}>
      <Title>{title}</Title>
      <Space h={4} />
      <Point>{point}p</Point>
      <Space h={9} />
      <TempImg />
      <Space h={4} />
      <Flex>
        <Image alt="remove" src={remove} onClick={decreaseQuantity} />
        <Quantity>{quantity}</Quantity>
        <Image alt="add" src={add} onClick={increaseQuantity} />
      </Flex>
    </Wrapper>
  );
}

const Wrapper = styled.div<{ type: number }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 168px;
  height: 228.2px;
  border-radius: 6px;
  padding: 24px 0 11px 0;

  background: ${({ type }) =>
    type === 1
      ? "linear-gradient(180deg, #e7c367 0%, #f2e1b2 50.52%, #c79824 100%)"
      : type === 2
      ? "linear-gradient(180deg, #B7B7B7 0%, #F5F5F5 50.52%, #717171 100%)"
      : "linear-gradient(180deg, #B6A67E 0%, #F6EED7 50.52%, #826E3E 100%)"};
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
