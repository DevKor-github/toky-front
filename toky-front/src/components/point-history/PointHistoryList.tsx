"use client";
import styled from "styled-components";
import HistoryItem from "./HistoryItem";

export default function PointHistoryList() {
  return (
    <Wrapper>
      {mockHistory.map((history, idx) => (
        <HistoryItem key={idx} {...history} />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 0 20px 0 20px;
  background-color: #121212;
`;

export type HistoryT = {
  description: string;
  createdAt: string;
  pointChange: number;
  remainingPoint: number;
};

const mockHistory: HistoryT[] = [
  {
    description: "애플워치",
    createdAt: "23.09.23  13:21",
    pointChange: -900,
    remainingPoint: 100,
  },
  {
    description: "승부예측 참여 포인트 지급(축구)",
    createdAt: "23.09.22  17:52",
    pointChange: 50,
    remainingPoint: 1050,
  },
  {
    description: "내역",
    createdAt: "23.09.22  17:52",
    pointChange: 0,
    remainingPoint: 0,
  },
  {
    description: "내역",
    createdAt: "23.09.22  17:52",
    pointChange: 0,
    remainingPoint: 0,
  },
  {
    description: "내역",
    createdAt: "23.09.22  17:52",
    pointChange: 0,
    remainingPoint: 0,
  },
  {
    description: "내역",
    createdAt: "23.09.22  17:52",
    pointChange: 0,
    remainingPoint: 0,
  },
  {
    description: "내역",
    createdAt: "23.09.22  17:52",
    pointChange: 0,
    remainingPoint: 0,
  },
  {
    description: "내역",
    createdAt: "23.09.22  17:52",
    pointChange: 0,
    remainingPoint: 0,
  },
  {
    description: "내역",
    createdAt: "23.09.22  17:52",
    pointChange: 0,
    remainingPoint: 0,
  },
  {
    description: "내역",
    createdAt: "23.09.22  17:52",
    pointChange: 0,
    remainingPoint: 0,
  },
  {
    description: "내역",
    createdAt: "23.09.22  17:52",
    pointChange: 0,
    remainingPoint: 0,
  },
  {
    description: "내역",
    createdAt: "23.09.22  17:52",
    pointChange: 0,
    remainingPoint: 0,
  },
  {
    description: "내역",
    createdAt: "23.09.22  17:52",
    pointChange: 0,
    remainingPoint: 0,
  },
];
