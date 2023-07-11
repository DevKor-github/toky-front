"use-client";
import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import articleImg1 from "../../../public/image/article1.svg";
import articleImg2 from "../../../public/image/article2.svg";
import arrowDown from "../../../public/image/arrow_down.svg";
import ArticleItem from "./ArticleItem";

export default function Article() {
  const [articleNum, setArticleNum] = useState(5);
  const totalArticle = articleMock.length;

  return (
    <Wrapper>
      <span className="title">인터뷰/기사</span>
      {articleMock.slice(0, articleNum).map((item, idx) => (
        <ArticleItem
          key={idx}
          title={item.title}
          img={item.img}
          src={item.src}
          date={item.date}
        />
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

const articleMock = [
  {
    title:
      "고연전 승리 이끈 돌격대장' 박무빈 “고려대 팬들이 만든 승리” 머머머머머머머머머머머머머머머머머머",
    img: articleImg1,
    src: "KUTV 고려대학교 방송국",
    date: "2023.09.17. 20:08",
  },
  {
    title: "뜨거운 함성 '2022 정기연고전'",
    img: articleImg2,
    src: "KUTV 고려대학교 방송국",
    date: "2023.09.17. 20:08",
  },
  {
    title: "뜨거운 함성 '2022 정기연고전' 사진없고 한줄",
    src: "KUTV 고려대학교 방송국",
    date: "2023.09.17. 20:08",
  },
  {
    title:
      "'고연전 승리 이끈 돌격대장' 박무빈 “고려대 팬들이 만든 승리” 머머머머머머머머머머머머머머머머머머머머머머머",
    src: "KUTV 고려대학교 방송국",
    date: "2023.09.17. 20:08",
  },
  {
    title:
      "'고연전 승리 이끈 돌격대장' 박무빈 “고려대 팬들이 만든 승리” 머머머머머머머머머머머머머머머머머머머머머머머",
    src: "KUTV 고려대학교 방송국",
    date: "2023.09.17. 20:08",
  },
  {
    title:
      "고연전 승리 이끈 돌격대장' 박무빈 “고려대 팬들이 만든 승리” 머머머머머머머머머머머머머머머머머머",
    img: articleImg1,
    src: "KUTV 고려대학교 방송국",
    date: "2023.09.17. 20:08",
  },
  {
    title: "뜨거운 함성 '2022 정기연고전'",
    img: articleImg2,
    src: "KUTV 고려대학교 방송국",
    date: "2023.09.17. 20:08",
  },
  {
    title: "뜨거운 함성 '2022 정기연고전' 사진없고 한줄",
    src: "KUTV 고려대학교 방송국",
    date: "2023.09.17. 20:08",
  },
  {
    title:
      "'고연전 승리 이끈 돌격대장' 박무빈 “고려대 팬들이 만든 승리” 머머머머머머머머머머머머머머머머머머머머머머머",
    src: "KUTV 고려대학교 방송국",
    date: "2023.09.17. 20:08",
  },
  {
    title:
      "'고연전 승리 이끈 돌격대장' 박무빈 “고려대 팬들이 만든 승리” 머머머머머머머머머머머머머머머머머머머머머머머",
    src: "KUTV 고려대학교 방송국",
    date: "2023.09.17. 20:08",
  },
  {
    title:
      "고연전 승리 이끈 돌격대장' 박무빈 “고려대 팬들이 만든 승리” 머머머머머머머머머머머머머머머머머머",
    img: articleImg1,
    src: "KUTV 고려대학교 방송국",
    date: "2023.09.17. 20:08",
  },
  {
    title: "뜨거운 함성 '2022 정기연고전'",
    img: articleImg2,
    src: "KUTV 고려대학교 방송국",
    date: "2023.09.17. 20:08",
  },
  {
    title: "뜨거운 함성 '2022 정기연고전' 사진없고 한줄",
    src: "KUTV 고려대학교 방송국",
    date: "2023.09.17. 20:08",
  },
  {
    title:
      "'고연전 승리 이끈 돌격대장' 박무빈 “고려대 팬들이 만든 승리” 머머머머머머머머머머머머머머머머머머머머머머머",
    src: "KUTV 고려대학교 방송국",
    date: "2023.09.17. 20:08",
  },
  {
    title:
      "'고연전 승리 이끈 돌격대장' 박무빈 “고려대 팬들이 만든 승리” 머머머머머머머머머머머머머머머머머머머머머머머",
    src: "KUTV 고려대학교 방송국",
    date: "2023.09.17. 20:08",
  },
  {
    title:
      "고연전 승리 이끈 돌격대장' 박무빈 “고려대 팬들이 만든 승리” 머머머머머머머머머머머머머머머머머머",
    img: articleImg1,
    src: "KUTV 고려대학교 방송국",
    date: "2023.09.17. 20:08",
  },
  {
    title: "뜨거운 함성 '2022 정기연고전'",
    img: articleImg2,
    src: "KUTV 고려대학교 방송국",
    date: "2023.09.17. 20:08",
  },
  {
    title: "뜨거운 함성 '2022 정기연고전' 사진없고 한줄",
    src: "KUTV 고려대학교 방송국",
    date: "2023.09.17. 20:08",
  },
  {
    title:
      "'고연전 승리 이끈 돌격대장' 박무빈 “고려대 팬들이 만든 승리” 머머머머머머머머머머머머머머머머머머머머머머머",
    src: "KUTV 고려대학교 방송국",
    date: "2023.09.17. 20:08",
  },
  {
    title:
      "'고연전 승리 이끈 돌격대장' 박무빈 “고려대 팬들이 만든 승리” 머머머머머머머머머머머머머머머머머머머머머머머",
    src: "KUTV 고려대학교 방송국",
    date: "2023.09.17. 20:08",
  },
];
