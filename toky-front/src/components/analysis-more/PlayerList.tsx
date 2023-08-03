"user-client";
import { useState } from "react";
import styled from "styled-components";
import Image, { StaticImageData } from "next/image";
import PlayerItem from "./PlayerItem";
import arrowDown from "../../../public/image/arrow_down.svg";
import arrowUp from "../../../public/image/arrow_up.svg";
import { koreaPlayer } from "./PlayerData/KoreaPlayerData";
import { yonseiPlayer } from "./PlayerData/YonseiPlayerData";

interface Props {
  univ: number;
  match: number;
}
export interface IPlayer {
  img: StaticImageData;
  name: string;
  backNum: number;
  position: string;
  studentId: number;
  body: string;
}
export default function PlayerList({ univ, match }: Props) {
  const [open, setOpen] = useState(false);
  const players = univ === 0 ? koreaPlayer[match] : yonseiPlayer[match];
  return (
    <>
      <Wrapper open={open}>
        {players.map((item, idx) => (
          <PlayerItem
            key={idx}
            img={item.img}
            name={item.name}
            backNum={item.backNum}
            position={item.position}
            studentId={item.studentId}
            body={item.body}
          />
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
