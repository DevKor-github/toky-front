import axios from "axios";
import React, { useEffect, useState } from "react";
import QuestionItem from "./QuestionItem";
import { QuestionType } from "../../app/bets/page";

//  import "./QuestionList.css";
// match type으로 backend에 쏘고 getBetQuestions(match: Match) 받아서
interface QuestionListProps {
  match: number;
  questions: QuestionType[];
}

export interface BetSchema {
  questionId: number;
  answer: number | null;
}

export interface BettedSchema {
  questionId: number;
  answerId: number;
  answer: number | null;
}

export default function QuestionList({ match, questions }: QuestionListProps) {
  const [betList, setBetList] = useState<BettedSchema[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // 중복 베팅 방지, QuestionItem의 itemIndex 값을 사용
  const [blockedBet, setBlockedBet] = useState<number>(-1);

  // match 변경 시 -> 베팅 이력 가져오기
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_API_BETS) {
      setIsLoading(true);

      axios
        .get(`${process.env.NEXT_PUBLIC_API_BETS}`)
        .then((res) => {
          if (res.status === 200) {
            console.log(res.data);
            // setBetList(JSON.parse(res.data));
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

  const getAnswerByQid = (betList: BettedSchema[], qid: number) => {
    for (let i = 0; i < betList.length; i++) {
      if (betList[i].questionId === qid) {
        return betList[i].answerId;
      }
    }
    return null;
  };

  const getAnswerIdByQid = (betList: BettedSchema[], qid: number) => {
    for (let i = 0; i < betList.length; i++) {
      if (betList[i].questionId === qid) {
        return betList[i].answer;
      }
    }
    return null;
  };

  const setBet = (betList: BettedSchema[], qid: number, ans: number) => {
    // betlist 찾아서 있으면 patch 해야됨
    const answerId: null | number = getAnswerIdByQid(betList, qid);

    // 베팅 이력이 있는 경우
    if (answerId !== null) {
      axios
        .patch(`${process.env.NEXT_PUBLIC_API_BETS}`, {
          answerId: answerId,
          answer: ans,
        })
        .then((res) => {
          if (res.status === 200) {
            setBetList((prev: BettedSchema[]) => {
              return prev.map((el) => {
                if (el.answerId === answerId) {
                  el.answer = ans;
                }
                return el;
              });
            });
          }
        })
        .catch((error) => {
          alert("서버에서 배팅을 처리하지 못했습니다.");
        })
        .finally(() => {
          setBlockedBet(-1);
        });
    }
    // 베팅 이력이 없는 경우 (신규 베팅) => 베팅 클릭시 버튼 클릭을 일정시간 막아야 중복 베팅이 방지될듯
    else {
      axios
        .post(`${process.env.NEXT_PUBLIC_API_BETS}`, {
          questionId: qid,
          answer: ans,
        })
        .then((res) => {
          if (res.status === 200) {
            setBetList((prev) => {
              return [
                { answerId: res.data.answerId, answer: ans, questionId: qid },
                ...prev,
              ];
            });
          }
        })
        .catch((error) => {
          alert("서버에서 배팅을 처리하지 못했습니다.");
        })
        .finally(() => {
          setBlockedBet(-1);
        });
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
      {!isLoading &&
        questions.map((question, i) => (
          <div key={i}>
            <QuestionItem
              qid={question.id}
              match={match}
              key={i}
              itemIndex={i}
              description={question.description}
              choice={question.choice}
              bet={getAnswerByQid(betList, question.id)}
              betList={betList}
              setBet={setBet}
              blockedBet={blockedBet}
              setBlockedBet={setBlockedBet}
            />
          </div>
        ))}
    </div>
  );
}
