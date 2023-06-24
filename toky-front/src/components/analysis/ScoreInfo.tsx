"use client";
import Image from "next/image";
import { styled } from "styled-components";
import CharImage from "../../../public/image/Logo.webp";
export default function ScoreInfo() {
  //10경기 -- 한 종목당 2개
  //match 받아서
  //과거 결과 데이터 받아오기
  //몇개 안되니까 하드코딩으로 박아버리고 매치에 따라 다르게 표시하는 것만 해주기

  const score = [{}, {}];
  const match = 0; //match 정보가 넘어옴

  return (
    <ScoreInfowrapper>
      <Container>
        <LeagueInfo>2022 KUSF 대학축구 U리그</LeagueInfo>
        <ResultInfo>대결 경기는 고려대가 승리했어요</ResultInfo>
        <CharImageWrapper>
          <Image src={CharImage} alt="character image" />
        </CharImageWrapper>
      </Container>
    </ScoreInfowrapper>
  );
}

const ScoreInfowrapper = styled.div`
  min-height: 500px;
  position: relative;
`;
const Container = styled.div``;
const LeagueInfo = styled.h4`
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  letter-spacing: -0.04em;
  color: rgba(255, 255, 255, 0.38);
  margin-top: 70px;
`;
const ResultInfo = styled.h2`
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  text-align: center;
  letter-spacing: -0.04em;

  color: rgba(255, 255, 255, 0.87);
  margin-top: 10px;
`;

const CharImageWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
