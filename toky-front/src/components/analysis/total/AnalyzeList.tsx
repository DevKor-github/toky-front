"use client";

import styled from "styled-components";
import AnalyzeItem, { AnalyzeItemProps } from "./AnalyzeItem";
import Image from "next/image";
import KoreaBg from "../../../../public/image/KoreaBg.svg";
import YonseiBg from "../../../../public/image/YonseiBg.svg";

export default function AnalyzeList() {
  const propsList: Array<AnalyzeItemProps> = [
    { match: "축구", kWin: 20, yWin: 17 },
    { match: "럭비", kWin: 20, yWin: 25 },
    { match: "야구", kWin: 25, yWin: 18 },
    { match: "농구", kWin: 23, yWin: 22 },
    { match: "빙구", kWin: 17, yWin: 23 },
  ];
  const AnalyzeItems = propsList.map((props) => (
    <AnalyzeItem {...props} key={props.match} />
  ));
  return (
    <Wrapper>
      {AnalyzeItems}
      <BackgroundImageWrapper>
        <Image src={KoreaBg} alt={"Korea Univ Logo"} />
        <div style={{ top: 136, position: "relative" }}>
          <Image src={YonseiBg} alt={"Yonsei Univ Logo"} />
        </div>
      </BackgroundImageWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 40px;
  align-items: center;
  background-color: #121212;
`;

const BackgroundImageWrapper = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: space-between;

  top: 60px;
`;
