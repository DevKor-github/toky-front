"use client";

import styled from "styled-components";
import UserInfo from "./UserInfo";
import RankingItem from "./RankingItem";
import { useEffect, useRef } from "react";

export type RankingItemT = {
	university: number;
	name: string;
	point: number;
	rank: number;
};

export interface RankingInfoProps {
	total: number;
	rank: number;
	rankInfoList: RankingItemT[];
	scrollRef: React.RefObject<HTMLDivElement>;
	searchMyRank: () => void;
}

export default function RankingInfo({
	total,
	rank,
	rankInfoList,
	scrollRef,
	searchMyRank,
}: RankingInfoProps) {
	return (
		<Wrapper id="ranking-info">
			<UserInfo total={total} rank={rank} searchMyRank={searchMyRank} />
			<Divider />
			<Ranking ref={scrollRef}>
				{rankInfoList
					? rankInfoList.map((item, idx) => <RankingItem key={idx} {...item} />)
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
