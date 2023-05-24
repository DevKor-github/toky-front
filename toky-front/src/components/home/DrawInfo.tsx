"use client";

import Image from "next/image";
import { styled } from "styled-components";
import DrawProduct from "../../../public/image/DummyProduct.png";
import Link from "next/link";
export default function DrawInfo() {
  const userid = null;
  //user정보 없으면 로그인으로, 있으면 bets로
  return (
    <DrawInfoWrapper>
      <DrawDescription>
        <h1>경품 응모</h1>
        <h4>지급된 포인트는 다양한 경품 응모할 수 있어요</h4>
      </DrawDescription>
      <DrawGifWrapper>
        <Image src={DrawProduct} alt="Draw product" width={148} height={148} />
      </DrawGifWrapper>
      <Btn>
        <Link href="/bets/0">토키 바로 시작하기</Link>
      </Btn>
    </DrawInfoWrapper>
  );
}
const DrawInfoWrapper = styled.div`
  background-color: #121212;
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: white;
`;

const DrawDescription = styled.div``;
const DrawGifWrapper = styled.div`
  //position relative image fill하면 크기 맞춰짐
`;
const Btn = styled.button`
  border: none;
  width: 350px;
  height: 46px;
  background: #4c0eb0;
  border-radius: 4px;
`;
