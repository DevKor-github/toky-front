import React from "react";
import QuestionItem from "./QuestionItem";
import { styled } from "styled-components";

//  import "./QuestionList.css";
// match type으로 backend에 쏘고 getBetQuestions(match: Match) 받아서
interface QuestionListProps {
  questions: {
    id: number;
    description: string;
    choice: string[];
  }[];
}

export default function QuestionList({ questions }: QuestionListProps) {
  const questionList = questions.map((question, i) => {
    return (
      <div key={question.id}>
        <QuestionItem
          key={i}
          itemIndex={i}
          description={question.description}
          choice={question.choice}
        />
      </div>
    );
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
      }}
    >
      {questionList}
    </div>
  );
}
