"use client";
import BetBanner from "@/components/bets/BetBanner";
import BetTopBar from "@/components/bets/BetTopBar";
import MatchNavBar from "@/components/bets/MatchNavBar";
import QuestionList from "@/components/bets/QuestionList";
import AuthContext from "@/components/common/AuthContext";
import NavigationBar from "@/components/common/NavigationBar";
import SharePrediction from "@/components/share/SharePrediction";
import client from "@/lib/httpClient";
import withAuth from "@/lib/withAuth";
import axios from "axios";
import { use, useContext, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { styled } from "styled-components";

export type QuestionType = {
  id: number;
  match: number;
  description: string;
  choice: string[];
};

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
    if (authCtx.id === "") {
      client
        .get("/auth/profile")
        .then((res) => {
          return res.data;
        })
        .then((user) => {
          authCtx.setUserId(user.id);
          authCtx.setNickname(user.name);
          const uni = user.university === 0 ? "고려대학교" : "연세대학교";
          authCtx.setUniv(uni);
        });
    }
    console.log(authCtx);
  }, []);
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_API_BETS_QUESTIONS) {
      setIsLoading(true);

      axios
        .get(`${process.env.NEXT_PUBLIC_API_BETS_QUESTIONS}/${match}`)
        .then((res) => {
          if (res.status === 200) {
            console.log(res.data);
            // setQuestions(JSON.parse(res.data));
          }
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [match]);
  return (
    <>
      <NavigationBar />
      <BetBanner match={match} clickModal={clickModal} />
      <MatchNavBar match={match} handleMatch={handleMatch} />
      {!isLoading && <QuestionList match={match} questions={questions} />}
      {showModal && portalElement
        ? createPortal(
            <SharePrediction clickModal={clickModal} />,
            portalElement
          )
        : null}
    </>
  );
}

export default withAuth(Bets);
