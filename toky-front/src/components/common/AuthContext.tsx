"use client";
import React, { ReactNode, useState } from "react";

const AuthContext = React.createContext({
  id: "",
  university: "",
  nickname: "",
  setUserId: (id: string) => {},
  setUniv: (univ: string) => {},
  setNickname: (nickname: string) => {},
});
type LayoutProps = { children?: ReactNode };

export const AuthContextProvider = ({ children }: LayoutProps) => {
  const [userId, setUserId] = useState<string>("");
  const [univ, setUniv] = useState<string>("");
  const [nickname, setNickname] = useState<string>("");
  const setUserIdHandler = (id: string) => {
    setUserId(id);
  };
  const setUnivHandler = (univ: string) => {
    setUniv(univ);
  };
  const setNicknameHandler = (nickname: string) => {
    setNickname(nickname);
  };
  const contextValue = {
    id: userId,
    university: univ,
    nickname: nickname,
    setUserId: setUserIdHandler,
    setUniv: setUnivHandler,
    setNickname: setNicknameHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
