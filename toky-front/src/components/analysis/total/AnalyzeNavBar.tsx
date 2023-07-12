"use client";

import styled from "styled-components";
import Image from "next/image";
import AnalyzeMainBg from "../../../public/image/AnalyzeMainBg.svg";

export default function AnalyzeNavBar() {
  return (
    <div style={{ position: "relative" }}>
      <Wrapper>
        <NavigationItem selected>전체</NavigationItem>
        <NavigationItem>야구</NavigationItem>
        <NavigationItem>축구</NavigationItem>
        <NavigationItem>농구</NavigationItem>
        <NavigationItem>럭비</NavigationItem>
        <NavigationItem>빙구</NavigationItem>
      </Wrapper>
      {/* <ImageWrapper>
				<Image src={AnalyzeMainBg} alt='AnalyzeMainBg' />
			</ImageWrapper>
			<ScheduleWrapper>
				<div>2023.09.08(금) 야구, 농구, 빙구</div>
				<div>2023.09.09(토) 축구, 럭비</div>
			</ScheduleWrapper>
			<DeadlineWrapper>
				<DeadlineTitle>예측 마감까지</DeadlineTitle>
				<DeadlineTime>10일 10시간 10분 10초 전</DeadlineTime>
			</DeadlineWrapper>
			<BetButton>승부예측하러 가기</BetButton> */}
    </div>
  );
}

const BetButton = styled.button`
  width: 125px;
  height: 32px;
  background-color: rgba(18, 18, 18, 0.8);
  border-radius: 5px;
  top: 241px;
  left: calc(50% - 125px / 2 + 0.5px);
  position: absolute;
  backdrop-filter: blur(2px);
  z-index: 4;

  font-size: 12px;

  &:hover {
    cursor: pointer;
  }
`;

const DeadlineWrapper = styled.div`
  position: absolute;
  top: 153px;
  left: 50%;
  transform: translate(-50%, 0%);
  color: white;
`;
const DeadlineTitle = styled.div`
  font-size: 14px;
`;
const DeadlineTime = styled.div`
  font-weight: 700;
  font-size: 22px;
  white-space: nowrap;
  text-align: center;
`;
const ScheduleWrapper = styled.div`
  position: absolute;
  top: 97px;
  left: 20px;
  color: white;
  font-size: 12px;
`;

const ImageWrapper = styled.div`
  position: absolute;
  top: 46px;
  filter: opacity(0.5) drop-shadow(0 0 0 #000000);
`;

const Wrapper = styled.div`
  position: absolute;
  top: 46px;
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  background-image: linear-gradient(rgba(18, 18, 18, 1), rgba(18, 18, 18, 0));
  z-index: 3;
`;

const NavigationItem = styled.div<{ selected?: boolean }>`
  display: flex;
  align-items: center;
  height: 46px;
  font-size: 15px;
  color: rgba(255, 255, 255, 0.38);

  ${({ selected }) => selected && "color: #ffffff; 	font-weight: 700;"}
`;
