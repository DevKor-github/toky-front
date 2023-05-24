"use client";

import Image from "next/image";
import { styled } from "styled-components";
import BetExGif from "../../../public/image/BetExGif.gif";
export default function BetInfo() {
  return (
    <BetInfoWrapper>
      <BetDescription>
        <h1>경기 결과를 예측해봐요</h1>
        <h4>예측에 성공하면 경기가 종료된 후 포인트를 받을 수 있어요</h4>
      </BetDescription>
      <BetGifWrapper>
        <Image
          src={BetExGif}
          alt="bet explanation gif"
          width={347}
          height={67}
        />
      </BetGifWrapper>
    </BetInfoWrapper>
  );
}

const BetInfoWrapper = styled.div`
  background-color: #121212;
  height: 377px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: white;
`;

const BetDescription = styled.div``;
const BetGifWrapper = styled.div`
  //position relative image fill하면 크기 맞춰짐
`;
