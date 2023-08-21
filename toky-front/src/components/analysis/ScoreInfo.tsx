"use client";
import Image from "next/image";
import { css, styled } from "styled-components";
import CharImage from "../../../public/image/Logo.webp";
import { MatchProps } from "./MatchType";
import { pastMatch } from "./Data";
import React from "react";
import KoreaLogo from "../../../public/image/PastMatchKoreaLogo.png";
import YonseiLogo from "../../../public/image/PastMatchYonseiLogo.png";
export default function ScoreInfo({ match }: MatchProps) {
  //10경기 -- 한 종목당 2개
  //match 받아서
  //과거 결과 데이터 받아오기
  //몇개 안되니까 하드코딩으로 박아버리고 매치에 따라 다르게 표시하는 것만 해주기

  const score = [{}, {}];
  return (
    <>
      <ScoreInfowrapper>
        <Container>
          <LeagueInfo>최근 두 경기 상대 전적 </LeagueInfo>
          <ResultInfo>대결 경기는 고려대가 승리했어요</ResultInfo>
          <CharImageWrapper>
            <Image src={CharImage} alt="character image" />
          </CharImageWrapper>
        </Container>
      </ScoreInfowrapper>
      {pastMatch[match].map((c, i) => (
        <React.Fragment key={i}>
          <MatchContainer $result={c.result}>
            {i % 2 == 0 && <p className="univ">KOREA</p>}
            <MatchTextContainer>
              <h1>{c.score}</h1>
              <h2>{c.date}</h2>
              <h4>{c.leagueName}</h4>
            </MatchTextContainer>
            {i % 2 !== 0 && (
              <>
                <Image
                  src={KoreaLogo}
                  alt="korea logo"
                  width={90}
                  height={105}
                  style={{ position: "absolute", bottom: "0", left: "10px" }}
                />
                <Image
                  src={YonseiLogo}
                  alt="yonsei logo"
                  width={118}
                  height={111}
                  style={{ position: "absolute", bottom: "0", right: "8px" }}
                />
              </>
            )}
            {i % 2 == 0 && <p className="univ">YONSEI</p>}
          </MatchContainer>
        </React.Fragment>
      ))}
    </>
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

const MatchContainer = styled.div<{ $result: number }>`
  ${(props) => {
    if (props.$result === 0) {
      return css`
        background: linear-gradient(
          90deg,
          #f3233c,
          rgba(243, 35, 60, 0.1) 50%,
          rgba(41, 72, 255, 0.3) 100%
        );
      `;
    } else {
      return css`
        background: linear-gradient(
          90deg,
          rgba(243, 35, 60, 0.3),
          rgba(243, 35, 60, 0.03) 50%,
          #2948ff 100%
        );
      `;
    }
  }}
  min-height: 138px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .univ {
    opacity: 0.2;
    color: #fff;
    font-family: Inter;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;
const MatchTextContainer = styled.div`
  color: white;
  text-align: center;
  min-width: 178px;
  h1 {
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 13px;
    white-space: nowrap;
  }
  h2 {
    font-size: 13px;
    font-weight: 700;
    margin-bottom: 5px;
    white-space: nowrap;
  }
  h4 {
    font-size: 8px;
    font-weight: 500;
    white-space: nowrap;
  }
`;
