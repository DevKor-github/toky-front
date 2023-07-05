import axios from "axios";
import React, { useEffect } from "react";
import QuestionItem from "./QuestionItem";

//  import "./QuestionList.css";
// match type으로 backend에 쏘고 getBetQuestions(match: Match) 받아서
interface QuestionListProps {
  match: number;
  questions: {
    id: number;
    description: string;
    choice: string[];
  }[];
}

interface BetSchema {
  questionId: number[];
  answer: number[];
}

export default function QuestionList({ match, questions }: QuestionListProps) {
  // betting 이력 조회 => QuestionItem에 내려줌
  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_BETS}`).then((res) => {
      if (res.status === 200) {
        const data: BetSchema = JSON.parse(res.data);
      }
    });
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
      }}
    >
      {questions.map((question, i) => (
        <div key={question.id}>
          <QuestionItem
            match={match}
            key={i}
            itemIndex={i}
            description={question.description}
            choice={question.choice}
          />
        </div>
      ))}
    </div>
  );
}
