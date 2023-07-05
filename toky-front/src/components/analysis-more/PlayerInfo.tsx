"use-client";
import { useState } from "react";
import styled from "styled-components";
import { Space } from "../common/Space";
import PlayerList from "./PlayerList";

export default function PlayerInfo() {
  const [match, setMatch] = useState(0);
  return (
    <Wrapper>
      <span className="title">선수 정보</span>
      <Space h={20} />
      <MatchSelector>
        <MatchOption isSelected={match === 0} onClick={() => setMatch(0)}>
          야구
        </MatchOption>
        <MatchOption isSelected={match === 1} onClick={() => setMatch(1)}>
          축구
        </MatchOption>
        <MatchOption isSelected={match === 2} onClick={() => setMatch(2)}>
          농구
        </MatchOption>
        <MatchOption isSelected={match === 3} onClick={() => setMatch(3)}>
          럭비
        </MatchOption>
        <MatchOption isSelected={match === 4} onClick={() => setMatch(4)}>
          빙구
        </MatchOption>
      </MatchSelector>
      <PlayerList univ={0} />
      <PlayerList univ={1} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  padding-top: 22px;
  background: #222222;

  .title {
    padding-left: 21px;
    color: rgba(255, 255, 255, 0.87);
    font-size: 20px;
    font-weight: 700;
    letter-spacing: -0.8px;
  }
`;

const MatchSelector = styled.div`
  display: flex;
  padding-left: 50px;
  gap: 10px;
  height: 32px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
`;

const MatchOption = styled.div<{ isSelected: boolean }>`
  width: 56px;
  color: rgba(255, 255, 255, 0.38);
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.64px;

  ${({ isSelected }) =>
    isSelected && `color: #ffffff; border-bottom: 3px solid #ffffff;`}
`;
