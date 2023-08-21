"use client";

import styled from "styled-components";
import UserInfo from "./UserInfo";
import RankingItem from "./RankingItem";
import { useContext } from "react";
import AuthContext from "../common/AuthContext";

export type RankingItemT = {
  university: number;
  name: string;
  point: number;
  rank: number;
  highlight: boolean;
};

export interface RankingInfoProps {
  total: number;
  rank: number;
  rankInfoList: RankingItemT[];
  scrollRef: React.RefObject<HTMLDivElement>;
  searchMyRank: () => void;
  clickModal: () => void;
  searchValue: string;
}

export default function RankingInfo({
  total,
  rank,
  rankInfoList,
  scrollRef,
  searchMyRank,
  clickModal,
  searchValue,
}: RankingInfoProps) {
  const authCtx = useContext(AuthContext);
  return (
    <Wrapper id="ranking-info">
      <UserInfo total={total} rank={rank} searchMyRank={searchMyRank} clickModal={clickModal} />
      <Divider />
      <Ranking ref={scrollRef}>
        {rankInfoList
          ? rankInfoList.map((item, idx) => (
              <RankingItem
                key={idx}
                highlight={item.name === authCtx.nickname || item.name === searchValue}
                university={item.university}
                name={item.name}
                point={item.point}
                rank={item.rank}
              />
            ))
          : "검색결과가 없습니다"}
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

  overflow-y: scroll;
`;
