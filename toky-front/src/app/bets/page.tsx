"use client";
import BetBanner from "@/components/bets/BetBanner";
import BetTopBar from "@/components/bets/BetTopBar";
import MatchNavBar from "@/components/bets/MatchNavBar";
import QuestionList from "@/components/bets/QuestionList";
import axios from "axios";
import { useEffect, useState } from "react";
import { styled } from "styled-components";

export type QuestionType = {
  id: number;
  match: number;
  description: string;
  choice: string[];
};

export default function Bets() {
  // useeffect로 axios쏘고 이미 있는지 체크
  // useffect로 question 받아와서 question set해주기
  // 서버로 유지 위해 use client를 question list로?

  const [match, setMatch] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [questions, setQuestions] = useState<QuestionType[]>([
    {
      id: 1,
      match: match,
      description: "첫 점수를 획득할 팀을 고르세요!",
      choice: ["고려대", "연세대"],
    },
    {
      id: 2,
      match: match,
      description: "승리 팀을 예측하세요!",
      choice: ["고려대 승", "무승부", "연세대 승"],
    },
  ]);

  const handleMatch = (m: number) => {
    setMatch(m);

    // 임시 코드
    setQuestions((prev) => {
      const newArr = [
        {
          id: 1,
          match: m,
          description: `${m} 첫 점수를 획득할 팀을 고르세요!`,
          choice: ["고려대", "연세대"],
        },
        {
          id: 2,
          match: m,
          description: "승리 팀을 예측하세요!",
          choice: ["고려대 승", "무승부", "연세대 승"],
        },
      ];
      return newArr;
    });

    // if (process.env.NEXT_PUBLIC_API_BETS_QUESTIONS) {
    //   axios
    //     .get(`${process.env.NEXT_PUBLIC_API_BETS_QUESTIONS}/${match}`)
    //     .then((res) => {
    //       if (res.status === 200) {
    //         setQuestions(JSON.parse(res.data));
    //       }
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     })
    //     .finally(() => {
    //       setIsLoading(false);
    //     });
    // }
  };

  useEffect(() => {
    setIsLoading(false);
  }, [match]);

  return (
    <BetWrapper>
      <BetTopBar />
      <BetBanner />
      <MatchNavBar match={match} handleMatch={handleMatch} />
      {!isLoading && <QuestionList match={match} questions={questions} />}
    </BetWrapper>
  );
}

const BetWrapper = styled.div`
  position: relative;
  background: #222222;
  color: #ffffff;
  padding-bottom: 150px;
`;
