"use client";
import BetBanner from "@/components/bets/BetBanner";
import BetTopBar from "@/components/bets/BetTopBar";
import QuestionList from "@/components/bets/QuestionList";
import { useState } from "react";

type QuestionType = { description: string; choice: string[] };

export default function bets() {
  const [questions, setQuestions] = useState<QuestionType[]>([
    { description: "q1", choice: ["고려대", "연세대"] },
    { description: "q2", choice: ["answer1", "answer2", "answer3"] },
  ]);
  return (
    <div>
      <BetTopBar />
      <BetBanner />
      <QuestionList questions={questions} />
    </div>
  );
}
