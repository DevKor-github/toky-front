import axios from "axios";
import React, { useEffect, useState } from "react";
import QuestionItem from "./QuestionItem";
import { QuestionType } from "../../app/bets/page";
import client from "@/lib/httpClient";

//  import "./QuestionList.css";
// match type으로 backend에 쏘고 getBetQuestions(match: Match) 받아서
interface QuestionListProps {
	questions: QuestionType[];
	setQuestions: (questions: QuestionType[]) => void;
	orgQuestions: QuestionType[];
}

export default function QuestionList({ questions, setQuestions, orgQuestions }: QuestionListProps) {
	// TODO:
	// 중복 베팅 방지, QuestionItem의 itemIndex 값을 사용
	const [blockedBet, setBlockedBet] = useState<number>(-1);

	const requestBetting = async (qid: number, answer: number) => {
		try {
			const response = await client.post(`${process.env.NEXT_PUBLIC_API_URL}/bets/bet`, {
				questionId: qid,
				answer,
			});
			if (response.status === 201) {
				alert("베팅 참여로 10P가 지급되었습니다.");
			}
			setQuestions(
				orgQuestions.map((question) =>
					question.questionId === qid
						? { ...question, answer: answer, percentage: response.data.percentage }
						: question
				)
			);
			console.log(questions);
		} catch (err) {
			console.log(err);
			alert("서버에서 배팅을 처리하지 못했습니다.");
		}
	};

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignContent: "center",
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
						/>
					</div>
				))
			}
		</div>
	);
}
