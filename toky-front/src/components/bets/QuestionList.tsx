import React, { useContext, useState } from "react";
import QuestionItem from "./QuestionItem";
import { QuestionType } from "../../app/bets/page";
import client from "@/lib/httpClient";
import AuthContext from "../common/AuthContext";
import { styled } from "styled-components";

//  import "./QuestionList.css";
// match type으로 backend에 쏘고 getBetQuestions(match: Match) 받아서
interface QuestionListProps {
  questions: QuestionType[];
  setQuestions: (questions: QuestionType[]) => void;
  orgQuestions: QuestionType[];
  match: number;
  matchProgress: boolean;
  setPointModal: () => void;
  setWaitModal: () => void;
  setFailModal: () => void;
}

export default function QuestionList({
  questions,
  setQuestions,
  orgQuestions,
  match,
  matchProgress,
  setPointModal,
  setWaitModal,
  setFailModal,
}: QuestionListProps) {
  // TODO:
  // 중복 베팅 방지, QuestionItem의 itemIndex 값을 사용
  const authCtx = useContext(AuthContext);
  const [blockedBet, setBlockedBet] = useState<number>(-1);

  const requestBetting = async (qid: number, answer: number) => {
    try {
      const response = await client.post(
        `${process.env.NEXT_PUBLIC_API_URL}/bets/bet`,
        {
          questionId: qid,
          answer,
        }
      );
      if (response.status === 201) {
        authCtx.setScore(authCtx.score + 10);
        authCtx.setRemain(authCtx.remain + 10);
        setPointModal();
      }
      setQuestions(
        orgQuestions.map((question) =>
          question.questionId === qid
            ? {
                ...question,
                answer: answer,
                percentage: response.data.percentage,
              }
            : question
        )
      );
    } catch (err) {
      console.log(err);
      setFailModal();
    }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          paddingBottom: "8vh",
          position: "relative",
        }}
      >
        {
          /*!isLoading &&*/
          questions.map((question, i) => (
            <div key={i}>
              <QuestionItem
                qid={question.questionId}
                key={i}
                itemIndex={i}
                description={question.description}
                choice={question.choices}
                answer={question.answer}
                blockedBet={blockedBet}
                setBlockedBet={setBlockedBet}
                percentage={question.percentage}
                requestBetting={requestBetting}
                match={match}
                setWaitModal={setWaitModal}
              />
            </div>
          ))
        }
        {!matchProgress && <Finish />}
      </div>
    </>
  );
}

export const Finish = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.5;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
  top: 0%;
  left: 0%;
`;
