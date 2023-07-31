"use client";

import { useEffect, useState } from "react";
import { styled } from "styled-components";

export const TimerWrapper = styled.div`
  white-space: nowrap;
  h4 {
    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 28px;
  }
  h5 {
    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.04em;
  }
`;

export const Countdown = (targetDate: Date): String[] => {
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
