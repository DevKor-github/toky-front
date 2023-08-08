"use client";
import { useContext, useEffect } from "react";
import TopBar from "@/components/common/TopBar";
import UserInfo from "@/components/mypage/UserInfo";
import AuthContext from "@/components/common/AuthContext";

import client from "@/lib/httpClient";
import withAuth from "@/lib/withAuth";

function MyPage() {
  const authCtx = useContext(AuthContext);

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
  }, []);

  return (
    <>
      <TopBar title="회원정보 관리" />
      <UserInfo />
    </>
  );
}

export default withAuth(MyPage);
