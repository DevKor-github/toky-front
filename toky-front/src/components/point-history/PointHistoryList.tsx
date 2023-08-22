"use client";
import styled from "styled-components";
import HistoryItem from "./HistoryItem";
import { useEffect, useRef, useState } from "react";
import client from "@/lib/httpClient";
export interface IHistory {
  detail: string;
  usedPoint: number;
  remainedPoint: number;
  createdAt: string;
}
export default function PointHistoryList() {
  const [isLoading, setIsLoading] = useState(false);
  const [historyList, setHistoryList] = useState<IHistory[]>([]);
  const [pageNumber, setPageNumber] = useState(1);
  const containerRef = useRef(null);
  const [lastPage, setLastPage] = useState<boolean>(false);
  async function getHistory() {
    setIsLoading(true);
    try {
      const historyResponse = await client.get(
        `/points/history?page=${pageNumber}`
      );
      const historyData: IHistory[] = historyResponse.data;
      if (historyData.length < 13) {
        console.log(historyData.length);
        setLastPage(true);
      }
      const allHistoryArray = historyData.map((h: IHistory) => {
        return {
          detail: h.detail,
          usedPoint: h.usedPoint,
          remainedPoint: h.remainedPoint,
          createdAt: h.createdAt,
        } as IHistory;
      });

      setHistoryList((prev) => [...prev, ...allHistoryArray]);
      setPageNumber((prevPageNumber) => prevPageNumber + 1);
    } catch (e) {
      console.log(e);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !isLoading) {
        if (!lastPage) {
          getHistory();
        }
      }
    }, options);

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    // 컴포넌트가 언마운트 될 때 IntersectionObserver를 해제합니다.
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [isLoading]);

  return (
    <Wrapper>
      {historyList.map((history, idx) => (
        <HistoryItem key={idx} {...history} />
      ))}
      <CheckScroll ref={containerRef} />
      {isLoading && <HistoryLoading>....</HistoryLoading>}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 0 20px 0 20px;
  background-color: #121212;
  position: relative;
`;
const CheckScroll = styled.div`
  height: 1px;
  width: 100%;
  background: transparent;
`;
const HistoryLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  color: white;
`;
