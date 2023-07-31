import { useEffect, useState } from "react";
import { TIME } from "../Data";
import { Countdown, TimerWrapper } from "./TimerComponent";

export default function FootballTimer() {
  let targetDate = TIME[4];
  // let targetDate = TIME[match]; //match 받아서 구현 match : number 날짜 다섯개 파기
  const [days, hours, minutes, seconds] = Countdown(targetDate);
  const timer = `${days}일 ${hours}시간 ${minutes}분 ${seconds}초 전`;
  return (
    <TimerWrapper>
      <h5>예측 마감까지</h5>
      <h4>{timer}</h4>
    </TimerWrapper>
  );
}
