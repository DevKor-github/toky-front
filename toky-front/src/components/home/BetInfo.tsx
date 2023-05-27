"use client";

import Image from "next/image";
import { styled } from "styled-components";
import BetExGif from "../../../public/image/BetExGif.gif";
import { MainSubTitle, MainTitle } from "./TitleComponents";

export default function BetInfo() {
  return (
    <BetInfoWrapper>
      <BetDescription>
        <MainTitle> 경기 결과를 예측해봐요</MainTitle>
        <MainSubTitle>
          예측에 성공하면 경기가 종료된 후 포인트를 받을 수 있어요
        </MainSubTitle>
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
  min-width: 390px;
  width: 100%;
  height: 377px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: white;
`;

const BetDescription = styled.div`
  margin-top: 103px;
`;
const BetGifWrapper = styled.div`
  margin-top: 51px;
  //position relative image fill하면 크기 맞춰짐
`;
