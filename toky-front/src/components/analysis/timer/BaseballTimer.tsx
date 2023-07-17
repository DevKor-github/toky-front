import { useEffect, useState } from "react";
import { TIME } from "../Data";

const Countdown = (targetDate: Date): String[] => {
  const countDownDate = new Date(targetDate).getTime();
  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime()
  );
  useEffect(() => {
    setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);
  }, [countDownDate]);
  return getReturnValues(countDown);
};
const getReturnValues = (countDown: number) => {
  // calculate time left
  const days = String(Math.floor(countDown / (1000 * 60 * 60 * 24))).padStart(
    2,
    "0"
  );
  const hours = String(
    Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  ).padStart(2, "0");
  const minutes = String(
    Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60))
  ).padStart(2, "0");
  const seconds = String(Math.floor((countDown % (1000 * 60)) / 1000)).padStart(
    2,
    "0"
  );
  return [days, hours, minutes, seconds];
};
export default function BaseballTimer() {
  let targetDate = TIME[0];
  // let targetDate = TIME[match]; //match 받아서 구현 match : number 날짜 다섯개 파기
  const [days, hours, minutes, seconds] = Countdown(targetDate);
  const timer = `${days}일 ${hours}시간 ${minutes}분 ${seconds}초 전`;
  return (
    <div style={{ width: "270px" }}>
      <h5
        style={{
          fontFamily: "Spoqa Han Sans Neo",
          fontStyle: "normal",
          fontWeight: 500,
          fontSize: "14px",
          lineHeight: "18px",
          letterSpacing: " -0.04em",
        }}
      >
        예측 마감까지
      </h5>
      <h4
        style={{
          fontFamily: "Spoqa Han Sans Neo",
          fontStyle: "normal",
          fontWeight: 700,
          fontSize: "22px",
          lineHeight: "28px",
        }}
      >
        {timer}
      </h4>
    </div>
  );
}
