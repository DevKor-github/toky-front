"use client";
import Image from "next/image";
import { styled } from "styled-components";
import AnalBannerImage from "../../../public/image/AnalBannerImage.png";
import Link from "next/link";
import Timer from "./Timer";
import { MatchProps } from "./MatchType";
import { SCHEDULE } from "./Data";
import React from "react";

function AnalBanner({ match }: MatchProps) {
  //progress 받아오기
  //match별 결과 받아오기
  let progress = 0;
  return (
    <BannerWrapper>
      <BannerImageWrapper>
        <Image
          src={AnalBannerImage}
          fill
          style={{ objectFit: "cover" }}
          alt="Analysis Banner Image"
        />
        <BannerImageBack />
      </BannerImageWrapper>
      <MatchTimeInfo>
        <H4>{SCHEDULE[match].playDate}</H4>

        <H4>{SCHEDULE[match].location}</H4>
      </MatchTimeInfo>
      <ProgressWrapper>
        {progress === 0 ? <Timer match={match} /> : null}
        {progress === 1 && <H3>예측 마감</H3>}
        {progress === 2 && (
          <>
            <H3>고려대학교 우승</H3>
            <H2>3 : 0</H2>
            {/* 경기 결과랑 매치를 이용해 바꾸기 */}
          </>
        )}
      </ProgressWrapper>

      <PredictBtn>
        {progress === 0 && (
          <Link href="/bets">
            <H4>승부예측하러 가기</H4>
          </Link>
        )}
        {progress === 1 && (
          <Link href="/">
            <H4>경기 보러 가기</H4>
          </Link>
        )}
        {progress === 2 && (
          <Link href="/">
            <H4>예측 결과 확인하기</H4>
          </Link>
        )}
      </PredictBtn>
    </BannerWrapper>
  );
}
export default React.memo(AnalBanner);

const BannerWrapper = styled.div`
  margin-top: 46px;
  position: relative;
`;
const BannerImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 38vh;
`;
const BannerImageBack = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  transform: matrix(-1, 0, 0, 1, 0, 0);
`;

const ProgressWrapper = styled.div`
  /* identical to box height */
  color: white;
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 247px;
`;
const MatchTimeInfo = styled.div`
  position: absolute;
  top: 15%;
  left: 5%;
`;
const PredictBtn = styled.button`
  position: absolute;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(18, 18, 18, 0.8);
  backdrop-filter: blur(2px);
  /* Note: backdrop-filter has minimal browser support */
  border-radius: 5px;
  color: white;
  width: 125px;
  height: 32px;
  text-align: center;
`;

const H4 = styled.h4`
  font-family: Spoqa Han Sans Neo;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.48px;
  color: white;
`;

const H3 = styled.h3`
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 28px;
  text-align: center;
  color: #ffffff;
`;
const H2 = styled.h2`
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 38px;
  text-align: center;
  color: #ffffff;
`;
