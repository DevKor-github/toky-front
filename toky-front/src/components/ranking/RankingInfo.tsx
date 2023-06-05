"use client";

import styled from "styled-components";
import UserInfo from "./UserInfo";
import RankingItem from "./RankingItem";

export type RankingItemT = {
  univ: number;
  userName: string;
  point: number;
  imageUrl?: string;
};

export default function RankingInfo() {
  return (
    <Wrapper id="ranking-info">
      <UserInfo />
      <Divider />
      <Ranking>
        {mockData.map((item, idx) => (
          <RankingItem key={idx} item={item} idx={idx + 1} />
        ))}
      </Ranking>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 46px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  overflow-y: scroll;
  background-color: #121212;
`;

const Divider = styled.div`
  width: calc(100% - 40px);
  height: 1px;
  background-color: rgba(255, 255, 255, 0.15);
`;

const Ranking = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const mockData: RankingItemT[] = [
  {
    univ: 0,
    userName: "유저이름열자열자",
    point: 300,
  },
  {
    univ: 1,
    userName: "유저이름열자열자",
    point: 300,
  },
  {
    univ: 0,
    userName: "유저이름열자열자",
    point: 300,
  },
  {
    univ: 0,
    userName: "유저이름열자열자",
    point: 300,
  },
  {
    univ: 0,
    userName: "유저이름열자열자",
    point: 300,
  },
  {
    univ: 1,
    userName: "유저이름열자열자",
    point: 300,
  },
  {
    univ: 1,
    userName: "유저이름열자열자",
    point: 300,
  },
  {
    univ: 0,
    userName: "유저이름열자열자",
    point: 300,
  },
  {
    univ: 1,
    userName: "유저이름열자열자",
    point: 300,
  },
  {
    univ: 0,
    userName: "유저이름열자열자",
    point: 300,
  },
  {
    univ: 1,
    userName: "유저이름열자열자",
    point: 300,
  },
];
