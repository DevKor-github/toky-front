"use client";
import styled from "styled-components";
import HistoryItem from "./HistoryItem";
import { IHistory } from "@/app/point-history/page";
import { useState } from "react";
interface PointHistoryProps {
  historyList: IHistory[];
}
export default function PointHistoryList({ historyList }: PointHistoryProps) {
  let viewer = false;

  if (historyList.length < 11) {
    viewer = true;
  }
  return (
    <Wrapper viewer={viewer}>
      {historyList.map((history, idx) => (
        <HistoryItem key={idx} {...history} />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div<{ viewer: boolean }>`
  padding: 0 20px 0 20px;
  background-color: #121212;
  height: ${(props) => (props.viewer ? "100vh" : "100%")};
`;
