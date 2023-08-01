"use client";
import BetBanner from "@/components/bets/BetBanner";
import MatchNavBar from "@/components/bets/MatchNavBar";
import QuestionList from "@/components/bets/QuestionList";
import AuthContext from "@/components/common/AuthContext";
import NavigationBar from "@/components/common/NavigationBar";
import SharePrediction from "@/components/share/SharePrediction";

import client from "@/lib/httpClient";
import withAuth from "@/lib/withAuth";

import { useContext, useEffect, useState } from "react";
import { createPortal } from "react-dom";

export interface QuestionType {
	questionId: number;
	description: string;
	choices: string[];
	percentage: number[];
	answer: number | null;
}

function Bets() {
	// useeffect로 axios쏘고 이미 있는지 체크
	// useffect로 question 받아와서 question set해주기
	// 서버로 유지 위해 use client를 question list로?

	const [showModal, setShowModal] = useState(false);
	const [portalElement, setProtalElement] = useState<Element | null>(null);

	useEffect(() => {
		setProtalElement(document.getElementById("portal"));
	}, [showModal]);

	function clickModal() {
		setShowModal(!showModal);
	}

	const [match, setMatch] = useState<number>(0);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	const [questions, setQuestions] = useState<QuestionType[]>([]);

	const handleMatch = (m: number) => {
		setMatch(m);
	};

	const authCtx = useContext(AuthContext);

	// 최초 로드 및 match 변경 시 -> 질문 가져오기
	useEffect(() => {
		if (authCtx.nickname === "") {
			client
				.get("/auth/profile")
				.then((res) => res.data)
				.then((user) => {
					authCtx.setNickname(user.name);
					const uni = user.university === 0 ? "고려대학교" : "연세대학교";
					authCtx.setUniv(uni);

					authCtx.setScore(user.score);
					authCtx.setRemain(user.remain);
				})
				.catch((err) => {
					window.location.href = "/login";
				});
		}
		client
			.get("/bets/questions")
			.then((res) => res.data)
			.then((data) => {
				return data;
			})
			.then((data) => setQuestions(data))
			.finally(() => setIsLoading(false));
	}, []);
	const questionsInMatch = questions
		.sort((a, b) => a.questionId - b.questionId)
		.filter((q) => q.questionId > match * 5 && q.questionId <= match * 5 + 5);

	return (
		<>
			<NavigationBar />
			<BetBanner match={match} clickModal={clickModal} />
			<MatchNavBar match={match} handleMatch={handleMatch} />
			{!isLoading && (
				<QuestionList
					questions={questionsInMatch}
					setQuestions={setQuestions}
					orgQuestions={questions}
				/>
			)}
			{showModal && portalElement
				? createPortal(<SharePrediction clickModal={clickModal} />, portalElement)
				: null}
		</>
	);
}

export default withAuth(Bets);
