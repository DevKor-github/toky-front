"use client";

import Image from "next/image";
import { styled } from "styled-components";
export default function BetBanner(){
  return (
    <Wrapper>
      <MatchProgressBox>
        <MatchProgressFont>예측 진행중</MatchProgressFont>
        {/* backgrou 이미지 넣고 logo image 넣고 시간 */}

      </MatchProgressBox>
        {/* 현재 x 명이 참여했어요!  */}
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const MatchProgressBox = styled.div`
  box-sizing: border-box;

  position: absolute;
  width: 80px;
  height: 22px;
  left: calc(50% - 80px / 2);
  top: 122px;

  background: rgba(249, 87, 106, 0.1);
  border: 0.5px solid #f95669;
  backdrop-filter: blur(2px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 20px;
`;
const MatchProgressFont = styled.p`
  width: 56px;
  height: 15px;
  left: calc(50% - 56px / 2);
  top: 125px;

  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  /* identical to box height */

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.04em;

  color: #fe6c7d;
`;


