"use client";
import React, { ReactNode, useState } from "react";

const AuthContext = React.createContext({
	university: "",
	nickname: "",
	score: 0,
	setScore: (score: number) => {},
	remain: 0,
	setRemain: (remain: number) => {},

	setUniv: (univ: string) => {},
	setNickname: (nickname: string) => {},
});
type LayoutProps = { children?: ReactNode };

export const AuthContextProvider = ({ children }: LayoutProps) => {
	const [univ, setUniv] = useState<string>("");
	const [nickname, setNickname] = useState<string>("");
	const [score, setScore] = useState<number>(0);
	const [remain, setRemain] = useState<number>(0);
	const setUnivHandler = (univ: string) => {
		setUniv(univ);
	};
	const setNicknameHandler = (nickname: string) => {
		setNickname(nickname);
	};
	const setScoreHandler = (score: number) => {
		setScore(score);
	};
	const setRemainHandler = (remain: number) => {
		setRemain(remain);
	};
	const contextValue = {
		university: univ,
		nickname: nickname,
		score: score,
		setScore: setScoreHandler,
		setUniv: setUnivHandler,
		setNickname: setNicknameHandler,
		remain: remain,
		setRemain: setRemainHandler,
	};

	return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export default AuthContext;
