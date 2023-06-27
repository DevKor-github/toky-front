import { useEffect, useState } from "react";

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
export default function Timer() {
  let targetDate = new Date("2023-11-02 16:14:14"); //match 받아서 구현 match : number 날짜 다섯개 파기
  const [days, hours, minutes, seconds] = Countdown(targetDate);
  const timer = `${days}일 ${hours}시간 ${minutes}분 ${seconds}초`;
  return (
    <div>
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

/*const [countDown, setCountDown] = useState(
    targetDate.getTime() - new Date().getTime()
  );
  const d = String(Math.floor(countDown / (1000 * 60 * 60 * 24))).padStart(
    2,
    "0"
  );
  const h = String(
    Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  ).padStart(2, "0");
  const m = String(
    Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60))
  ).padStart(2, "0");
  const s = String(Math.floor((countDown % (1000 * 60)) / 1000)).padStart(
    2,
    "0"
  );
  const [days, setDays] = useState(d);
  const [hours, setHours] = useState(h);
  const [minutes, setMinutes] = useState(m);
  const [seconds, setSeconds] = useState(s);

  useEffect(() => {
    setInterval(() => {
      setCountDown(targetDate.getTime() - new Date().getTime());
      const d = String(Math.floor(countDown / (1000 * 60 * 60 * 24))).padStart(
        2,
        "0"
      );
      const h = String(
        Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      ).padStart(2, "0");
      const m = String(
        Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60))
      ).padStart(2, "0");
      const s = String(Math.floor((countDown % (1000 * 60)) / 1000)).padStart(
        2,
        "0"
      );
      setDays(d);
      setHours(h);
      setMinutes(m);
      setSeconds(s);
    }, 1000);
  }, [countDown]);*/
