"use client";
import { TIME } from "@/components/analysis/Data";
import BetBanner from "@/components/bets/BetBanner";
import MatchNavBar from "@/components/bets/MatchNavBar";
import PointModal from "@/components/bets/PointModal";
import { ProgressCheck } from "@/components/common/ProgressCheck";
import QuestionList from "@/components/bets/QuestionList";
import AuthContext from "@/components/common/AuthContext";
import NavigationBar from "@/components/common/NavigationBar";
import SharePrediction from "@/components/share/SharePrediction";
import client from "@/lib/httpClient";
import withAuth from "@/lib/withAuth";
import { useContext, useEffect, useState } from "react";
import PageTransitionWrapper from "@/components/common/PageTransition";
import BetWaitModal from "@/components/bets/BetWaitModal";
import ModalPortal from "@/components/common/ModalPortal";
import BetFailModal from "@/components/bets/BetFailModal";
import CommonModal from "@/components/common/CommonModal";

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

	const [showShareModal, setShowShareModal] = useState(false);
	const [showPointModal, setShowPointModal] = useState(false);
	const [showWaitModal, setShowWaitModal] = useState(false);
	const [showFailModal, setShowFailModal] = useState(false);
	const [showSharePointModal, setShowSharePointModal] = useState(false);
	const [sharePointModalText, setSharePointModalText] = useState("");
	function clickShareModal() {
		setShowShareModal(!showShareModal);
	}
	useEffect(() => {
		if (!showShareModal) {
			if (
				!localStorage.getItem("prediction") ||
				new Date(localStorage.getItem("prediction")!).getTime() <=
					new Date().getTime() - 24 * 60 * 60 * 1000
			) {
				client
					.get("/points/share/prediction")
					.then((res) => res.data)
					.then((data) => {
						if (data === 300) {
							setShowSharePointModal(true);
							setSharePointModalText("최초 예측 공유로 300P 지급!");
							setTimeout(() => {
								setShowSharePointModal(false);
								setSharePointModalText("");
							}, 2000);
						} else if (data === 100) {
							setShowSharePointModal(true);
							setSharePointModalText("예측 공유로 100P 지급!");
							setTimeout(() => {
								setShowSharePointModal(false);
								setSharePointModalText("");
							}, 2000);
						}
					});
				localStorage.setItem("prediction", new Date().toISOString());
			}
		}
	}, [showShareModal]);

	function autoPointModal() {
		setShowPointModal(true);
		setTimeout(() => {
			setShowPointModal(false);
		}, 1000);
	}
	function clickPointModal() {
		setShowPointModal(false);
	}
	function clickFailModal() {
		setShowFailModal(!showFailModal);
	}
	function clickWaitModal() {
		setShowWaitModal(!showWaitModal);
	}

	const [match, setMatch] = useState<number>(0);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [questions, setQuestions] = useState<QuestionType[]>([]);

	const handleMatch = (m: number) => {
		setMatch(m);
	};

	const authCtx = useContext(AuthContext);
	const [matchProgress, setMatchProgress] = useState<boolean>(false);

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
					authCtx.setPhoneNum(user.phoneNumber);
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
	useEffect(() => {
		setMatchProgress(ProgressCheck(TIME[match]));
	}, [match]);
	const questionsInMatch = questions
		.sort((a, b) => a.questionId - b.questionId)
		.filter((q) => q.questionId > match * 5 && q.questionId <= match * 5 + 5);

	return (
		<>
			<NavigationBar />
			<PageTransitionWrapper>
				<BetBanner match={match} matchProgress={matchProgress} clickModal={clickShareModal} />
				<MatchNavBar match={match} handleMatch={handleMatch} />
				{!isLoading && (
					<QuestionList
						questions={questionsInMatch}
						setQuestions={setQuestions}
						orgQuestions={questions}
						setPointModal={autoPointModal}
						setWaitModal={clickWaitModal}
						setFailModal={clickFailModal}
						match={match}
						matchProgress={matchProgress}
					/>
				)}
				<ModalPortal isShowing={showPointModal}>
					<PointModal />
				</ModalPortal>
				<ModalPortal isShowing={showShareModal}>
					<SharePrediction clickModal={clickShareModal} />
				</ModalPortal>
				<ModalPortal isShowing={showWaitModal}>
					<BetWaitModal clickModal={clickWaitModal} />
				</ModalPortal>
				<ModalPortal isShowing={showFailModal}>
					<BetFailModal clickModal={clickFailModal} />
				</ModalPortal>
				<ModalPortal isShowing={showSharePointModal}>
					<CommonModal>{sharePointModalText}</CommonModal>
				</ModalPortal>
			</PageTransitionWrapper>
		</>
	);
}

export default withAuth(Bets);
