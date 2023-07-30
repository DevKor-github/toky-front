"use client";
import React, { ReactNode, useState } from "react";

const AuthContext = React.createContext({
	university: "",
	nickname: "",

	setUniv: (univ: string) => {},
	setNickname: (nickname: string) => {},
});
type LayoutProps = { children?: ReactNode };

export const AuthContextProvider = ({ children }: LayoutProps) => {
	const [univ, setUniv] = useState<string>("");
	const [nickname, setNickname] = useState<string>("");
	const setUnivHandler = (univ: string) => {
		setUniv(univ);
	};
	const setNicknameHandler = (nickname: string) => {
		setNickname(nickname);
	};
	const contextValue = {
		university: univ,
		nickname: nickname,

		setUniv: setUnivHandler,
		setNickname: setNicknameHandler,
	};

	return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export default AuthContext;
