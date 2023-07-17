"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import Image from "next/image";
import Help from "../../../public/image/help.svg";
import { Space } from "../common/Space";
import HelpTip from "./HelpTip";

export default function UserPoint() {
  const [helpTipOpen, setHelpTipOpen] = useState<boolean>(false);
  const router = useRouter();

  return (
    <Wrapper>
      <div
        style={{
          display: "flex",
          gap: 3,
          alignItems: "center",
          position: "relative",
        }}
      >
        <span className="text2">유저최대열자열자님의 포인트</span>
        <Image
          alt="help"
          src={Help}
          width={10}
          onClick={() => setHelpTipOpen(true)}
        />
        {helpTipOpen && <HelpTip closeHelpTip={() => setHelpTipOpen(false)} />}
      </div>
      <Space h={10} />
      <span className="text3">2000p</span>
      <Space h={3} />
      <span className="text1">누적 포인트: 2500p</span>
      <Space h={3} />
      <span
        className="text1"
        style={{ textDecoration: "underline" }}
        onClick={() => router.push("/point-history")}
      >
        적립/사용내역
      </span>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 140px;
  padding: 22px;
  background-color: #1f1f1f;

  .text1 {
    color: rgba(255, 255, 255, 0.87);
    font-family: Spoqa Han Sans Neo;
    font-size: 10px;
    font-weight: 400;
    letter-spacing: -0.4px;
  }

  .text2 {
    color: rgba(255, 255, 255, 0.6);
    font-family: Spoqa Han Sans Neo;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: -0.48px;
  }

  .text3 {
    color: #ffffff;
    font-family: Spoqa Han Sans Neo;
    font-size: 30px;
  }
`;
