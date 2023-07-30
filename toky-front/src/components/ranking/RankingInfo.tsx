"use client";

import styled from "styled-components";
import UserInfo from "./UserInfo";
import RankingItem from "./RankingItem";

export type RankingItemT = {
  university: number;
  name: string;
  point: number;
  rank: number;
};

export default function RankingInfo() {
  return (
    <Wrapper id="ranking-info">
      <UserInfo />
      <Divider />
      <Ranking>
        {mockData.map((item, idx) => (
          <RankingItem key={idx} {...item} />
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
  width: 100%;
  height: calc(100vh - 246px);
`;

const mockData: RankingItemT[] = [
  {
    university: 0,
    name: "유저이름열자열자",
    point: 300,
    rank: 1,
  },
  {
    university: 1,
    name: "유저이름열자열자",
    point: 300,
    rank: 2,
  },
  {
    university: 0,
    name: "유저이름열자열자",
    point: 300,
    rank: 3,
  },
  {
    university: 0,
    name: "유저이름열자열자",
    point: 300,
    rank: 4,
  },
  {
    university: 0,
    name: "유저이름열자열자",
    point: 300,
    rank: 5,
  },
  {
    university: 1,
    name: "유저이름열자열자",
    point: 300,
    rank: 6,
  },
  {
    university: 1,
    name: "유저이름열자열자",
    point: 300,
    rank: 7,
  },
  {
    university: 0,
    name: "유저이름열자열자",
    point: 300,
    rank: 8,
  },
  {
    university: 1,
    name: "유저이름열자열자",
    point: 300,
    rank: 9,
  },
  {
    university: 0,
    name: "유저이름열자열자",
    point: 300,
    rank: 10,
  },
  {
    university: 1,
    name: "유저이름열자열자",
    point: 300,
    rank: 11,
  },
];
