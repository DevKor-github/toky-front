"use client";

import styled from "styled-components";
import UserInfo from "./UserInfo";
import RankingItem from "./RankingItem";
import { useContext } from "react";
import AuthContext from "../common/AuthContext";
import NotFound from "../../../public/image/NotFound.png";
import Image from "next/image";

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
        {rankInfoList.length > 0 ? (
          rankInfoList.map((item, idx) => (
            <RankingItem
              key={idx}
              highlight={item.name === authCtx.nickname || item.name === searchValue}
              university={item.university}
              name={item.name}
              point={item.point}
              rank={item.rank}
            />
          ))
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 30,
            }}
          >
            <div
              style={{
                color: "white",
                margin: "0 auto",
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
              }}
            >
              <Image
                src={NotFound}
                width={200}
                height={200}
                alt="not found"
                style={{ marginBottom: "30px" }}
              />
              검색결과가 없습니다..ㅠㅠ
            </div>
          </div>
        )}
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
