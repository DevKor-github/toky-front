"use client";
import BetBanner from "@/components/bets/BetBanner";
import BetTopBar from "@/components/bets/BetTopBar";
import MatchNavBar from "@/components/bets/MatchNavBar";
import QuestionList from "@/components/bets/QuestionList";
import NavigationBar from "@/components/common/NavigationBar";
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

  const [questions, setQuestions] = useState<QuestionType[]>([]);

  const handleMatch = (m: number) => {
    setMatch(m);
  };

  // 최초 로드 및 match 변경 시 -> 질문 가져오기
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_API_BETS_QUESTIONS) {
      setIsLoading(true);

      axios
        .get(`${process.env.NEXT_PUBLIC_API_BETS_QUESTIONS}/${match}`)
        .then((res) => {
          if (res.status === 200) {
            console.log(res.data);
            // setQuestions(JSON.parse(res.data));
          }
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [match]);

  return (
    <>
      <NavigationBar />
      <BetBanner />
      <MatchNavBar match={match} handleMatch={handleMatch} />
      {!isLoading && <QuestionList match={match} questions={questions} />}
    </>
  );
}

const BetWrapper = styled.div`
  position: relative;
  background: #222222;
  color: #ffffff;
  padding-bottom: 150px;
`;
