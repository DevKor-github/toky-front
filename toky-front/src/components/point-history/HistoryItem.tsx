"use client";
import styled from "styled-components";
import { Space } from "../common/Space";
import { IHistory } from "./PointHistoryList";

export default function HistoryItem({
  detail: description,
  usedPoint: pointChange,
  createdAt: createdAt,
  remainedPoint: remainingPoint,
}: IHistory) {
  const convertDateFormat = (inputString: string) => {
    const parts = inputString.split("-");
    const formattedDate = `${parts[0].slice(2)}.${parts[1]}.${parts[2]}`;
    return formattedDate;
  };
  const timeArr = createdAt.split("T");
  const historyDate = convertDateFormat(timeArr[0]);
  const historyTime = timeArr[1].slice(0, 5);

  return (
    <Wrapper>
      <Space h={16} />
      <Flex>
        <div className="description">{description}</div>
        <div className="point-change">
          {pointChange >= 0 ? "+" + pointChange : pointChange}p
        </div>
      </Flex>
      <Space h={2} />
      <Flex>
        <div className="sub-content">{historyDate + " " + historyTime}</div>
        <div className="sub-content">{remainingPoint}p</div>
      </Flex>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 68px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  font-family: Spoqa Han Sans Neo;

  .description {
    color: #ffffff;
    font-size: 15px;
    font-weight: 400;
  }

  .point-change {
    color: #ffffff;
    font-family: Spoqa Han Sans Neo;
    font-size: 17px;
  }

  .sub-content {
    color: rgba(255, 255, 255, 0.38);
    font-size: 11px;
    font-weight: 400;
  }
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
