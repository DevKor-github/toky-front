"user-client";
import { useEffect, useState } from "react";
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
  const [playerNum, setPlayerNum] = useState<number>(3);

  const players = univ === 0 ? koreaPlayer[match] : yonseiPlayer[match];
  const totalPlayer = players.length;
  const expandAll = playerNum >= totalPlayer;
  useEffect(() => {
    setPlayerNum(3);
  }, [match]);
  const expandList = () => {
    if (playerNum < totalPlayer) {
      setPlayerNum(playerNum + 3);
    } else {
      setPlayerNum(3);
    }
  };

  return (
    <>
      <Wrapper>
        {players.slice(0, playerNum).map((item, idx) => (
          <PlayerItem
            key={idx}
            img={item.img}
            name={item.name}
            backNum={item.backNum}
            position={item.position}
            studentId={item.studentId}
            body={item.body}
            univ={univ}
            match={match}
          />
        ))}
      </Wrapper>
      <Open onClick={expandList}>
        <span>
          {expandAll
            ? "접기"
            : `선수 더보기 ${playerNum / 3} / ${Math.ceil(totalPlayer / 3)}`}
        </span>
        <Image src={expandAll ? arrowUp : arrowDown} alt="arrow" />
      </Open>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  padding: 12px 0 0 20px;
  flex-wrap: wrap;
  max-width: 400px;
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
