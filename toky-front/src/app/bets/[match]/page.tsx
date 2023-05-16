"use client";
import BetBanner from "@/components/bets/BetBanner";
import BetTopBar from "@/components/bets/BetTopBar";
import MatchNavBar from "@/components/bets/MatchNavBar";
import QuestionList from "@/components/bets/QuestionList";
import { useState } from "react";
import { styled } from "styled-components";

type QuestionType = { id: number; description: string; choice: string[] };

export default function bets() {
  // useeffect로 axios쏘고 이미 있는지 체크
  // useffect로 question 받아와서 question set해주기
  // 서버로 유지 위해 use client를 question list로?
  const [questions, setQuestions] = useState<QuestionType[]>([
    {
      id: 1,
      description: "첫 점수를 획득할 팀을 고르세요!",
      choice: ["고려대", "연세대"],
    },
    {
      id: 2,
      description: "승리 팀을 예측하세요!",
      choice: ["고려대 승", "무승부", "연세대 승"],
    },
  ]);
  return (
    <BetWrapper>
      <BetTopBar />
      <BetBanner />
      <MatchNavBar />
      <QuestionList questions={questions} />
    </BetWrapper>
  );
}

const BetWrapper = styled.div`
  position: relative;
  width: 390px;
  height: 1056px;
  /* black_0 */
  background: #222222;
  border-radius: 40px;
  color: #ffffff;
`;
