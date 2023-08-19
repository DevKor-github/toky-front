"use-client";
import { useState } from "react";
import styled from "styled-components";
import Image, { StaticImageData } from "next/image";
import arrowDown from "../../../public/image/arrow_down.svg";
import ArticleItem from "./ArticleItem";
import { articleData } from "./ArticleData";

export interface ArticleT {
  title: string;
  img?: StaticImageData;
  src: string;
  date: string;
  url: string;
}

export default function Article() {
  const [articleNum, setArticleNum] = useState(5);
  const totalArticle = articleData.length;

  return (
    <Wrapper>
      <span className="title">인터뷰/기사</span>
      {articleData.slice(0, articleNum).map((item, idx) => (
        <ArticleItem key={idx} {...item} />
      ))}
      <More
        onClick={() =>
          articleNum < totalArticle && setArticleNum(articleNum + 10)
        }
      >
        <span>
          기사 더보기 {(articleNum - 5) / 10 + 1} /{" "}
          {Math.ceil((totalArticle - 5) / 10) + 1}
        </span>
        <Image src={arrowDown} alt="arrow_down" />
      </More>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  padding: 22px 20px 0 20px;
  background: #222222;

  .title {
    color: rgba(255, 255, 255, 0.87);
    font-size: 20px;
    font-weight: 700;
    letter-spacing: -0.8px;
  }
`;

const More = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  height: 56px;

  color: rgba(255, 255, 255, 0.87);
  text-align: right;
  font-size: 14px;
  font-family: Spoqa Han Sans Neo;
  font-weight: 400;
  letter-spacing: -0.84px;
`;
