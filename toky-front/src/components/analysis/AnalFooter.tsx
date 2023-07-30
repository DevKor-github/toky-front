"use client";
import Link from "next/link";
import { styled } from "styled-components";

export default function AnalFooter() {
  //로그인에 따라 bets 어디로 갈지
  return (
    <AnalFooterWrapper className="AnalFooter">
      <MoreInfo>
        <Link href="/analysis-more">
          <H4>더 알아보기</H4>
        </Link>
      </MoreInfo>
      <BetLink>
        <Link href="/bets">
          <H4>배팅하러 가기</H4>
        </Link>
      </BetLink>
    </AnalFooterWrapper>
  );
}

const AnalFooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: #121212;
`;
const MoreInfo = styled.button`
  width: 170px;
  height: 46px;
  background-color: black;
  border: 1px solid rgba(255, 255, 255, 0.87);
  border-radius: 4px;
  color: white;
  box-sizing: border-box;
  margin: 5px;
`;
const BetLink = styled.button`
  width: 170px;
  height: 46px;
  background: rgba(255, 255, 255, 0.87);
  border-radius: 4px;
  color: #121212;
  margin: 5px;
`;
const H4 = styled.h4`
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-size: 16px;
  line-height: 20px;
  font-weight: 700;
  text-align: center;
  letter-spacing: -0.06em;
`;
