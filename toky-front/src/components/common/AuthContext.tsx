"use client";
import React, { ReactNode, useState } from "react";

const AuthContext = React.createContext({
  university: "",
  nickname: "",
  score: 0,
  remain: 0,
  phoneNum: "",
  setScore: (score: number) => {},
  setRemain: (remain: number) => {},
  setUniv: (univ: string) => {},
  setNickname: (nickname: string) => {},
  setPhoneNum: (phoneNum: string) => {},
});
type LayoutProps = { children?: ReactNode };

export const AuthContextProvider = ({ children }: LayoutProps) => {
  const [univ, setUniv] = useState<string>("");
  const [nickname, setNickname] = useState<string>("");
  const [score, setScore] = useState<number>(0);
  const [remain, setRemain] = useState<number>(0);
  const [phoneNum, setPhoneNum] = useState<string>("");

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
  const setPhoneNumHandler = (phoneNum: string) => {
    setPhoneNum(phoneNum);
  };

  const contextValue = {
    university: univ,
    nickname: nickname,
    score: score,
    remain: remain,
    phoneNum: phoneNum,
    setScore: setScoreHandler,
    setUniv: setUnivHandler,
    setNickname: setNicknameHandler,
    setRemain: setRemainHandler,
    setPhoneNum: setPhoneNumHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
