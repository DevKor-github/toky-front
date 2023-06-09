"user-client";
import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import PlayerItem from "./PlayerItem";
import player from "../../../public/image/player.svg";
import player2 from "../../../public/image/player2.svg";
import arrowDown from "../../../public/image/arrow_down.svg";
import arrowUp from "../../../public/image/arrow_up.svg";

interface Props {
  univ: number;
}

export default function PlayerList({ univ }: Props) {
  const [open, setOpen] = useState(false);
  const players = univ === 0 ? koreaPlayerMock : yonseiPlayerMock;
  return (
    <>
      <Wrapper open={open}>
        {players.map((item, idx) => (
          <PlayerItem key={idx} img={item.img} name={item.name} />
        ))}
      </Wrapper>
      <Open onClick={() => setOpen(!open)}>
        <span>{open ? "접기" : "펼쳐서 보기"}</span>
        <Image src={open ? arrowUp : arrowDown} alt="arrow" />
      </Open>
    </>
  );
}

const Wrapper = styled.div<{ open: boolean }>`
  display: flex;
  gap: 10px;
  padding: 12px 0 0 20px;
  overflow: hidden;

  ${({ open }) =>
    !open ? "max-height: 122px;  flex-wrap: nowrap" : "flex-wrap: wrap;"}
`;

const Open = styled.div`
  height: 46px;
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;

  color: rgba(255, 255, 255, 0.87);
  font-size: 14px;
  font-weight: 400;
  font-family: Spoqa Han Sans Neo;
  letter-spacing: -0.84px;
`;

const koreaPlayerMock = [
  { img: player, name: "김기현" },
  { img: player, name: "김기현" },
  { img: player, name: "김기현" },
  { img: player, name: "김기현" },
  { img: player, name: "김기현" },
  { img: player, name: "김기현" },
  { img: player, name: "김기현" },
  { img: player, name: "김기현" },
  { img: player, name: "김기현" },
];

const yonseiPlayerMock = [
  { img: player2, name: "이민혁" },
  { img: player2, name: "이민혁" },
  { img: player2, name: "이민혁" },
  { img: player2, name: "이민혁" },
  { img: player2, name: "이민혁" },
  { img: player2, name: "이민혁" },
  { img: player2, name: "이민혁" },
  { img: player2, name: "이민혁" },
  { img: player2, name: "이민혁" },
];
