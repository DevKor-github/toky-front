"use client";

import styled from "styled-components";

export default function AnalyzeHome() {
  return (
    <Wrapper>
      <TitleContainer>역대 고연전 종합 성적</TitleContainer>
      <Divider top={68} />
      <HistoryContainer>
        <div>
          <HistoryTitle>고려대학교</HistoryTitle>
          19
        </div>
        <div>
          <HistoryTitle>무승부</HistoryTitle>
          10
        </div>
        <div>
          <HistoryTitle>연세대학교</HistoryTitle>
          20
        </div>
      </HistoryContainer>
      <Divider top={84} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TitleContainer = styled.div`
  position: relative;
  top: 43px;
  font-weight: 700;
  font-size: 20px;
  line-height: 25.04px;
  color: rgba(255, 255, 255, 0.87);
`;

const HistoryContainer = styled.div`
  position: relative;
  display: flex;
  top: 81px;
  color: white;

  align-items: center;
  text-align: center;

  width: 242px;
  justify-content: space-between;

  font-weight: 700;
  font-size: 30px;
  line-height: 38px;
  letter-spacing: -0.1em;
`;
const HistoryTitle = styled.div`
  font-style: normal;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.06em;
`;

const Divider = styled.div<{ top: number }>`
  width: 350px;
  height: 0px;
  position: relative;
  top: ${({ top }) => top}px;
  border: 1px solid rgba(255, 255, 255, 0.15);
`;
