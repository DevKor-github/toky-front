"use client";

import Image, { StaticImageData } from "next/image";
import { styled, css } from "styled-components";
import gift0 from "../../../public/image/Gift/gift0.png";
import gift1 from "../../../public/image/Gift/gift1.png";
import gift2 from "../../../public/image/Gift/gift2.png";

import { MainSubTitle, MainTitle } from "./TitleComponents";
import { useRouter } from "next/navigation";
const GiftImage: StaticImageData[] = [gift1, gift0, gift2];
export default function DrawInfo() {
  const rank = [2, 1, 3];
  const router = useRouter();

  const handleBtnClick = () => {
    router.push("/bets");
  };

  const product = rank.map((ranking, i) => {
    return (
      <ProductContainer key={i}>
        <ProductBox ranking={ranking}>
          <ProductRank className="circle">{ranking}등</ProductRank>
          <ImageContainer className="gift">
            <Image
              src={GiftImage[i]}
              alt="Draw product"
              fill
              sizes="100px,100px,100px"
              style={{
                objectFit: "contain",
                // transform: "translate(-50%,0)",
              }}
            />
          </ImageContainer>
        </ProductBox>
        <p>
          {ranking === 1 && "애플워치 40mm (1명)"}
          {ranking === 2 && "배민 3만원 상품권 (5명)"}
          {ranking === 3 && "뿌링클+콜라 세트 (5명)"}
        </p>
      </ProductContainer>
    );
  });
  return (
    <DrawInfoWrapper>
      <DrawDescription>
        <MainTitle> 경품 응모</MainTitle>
        <MainSubTitle>
          지급된 포인트는 다양한 경품 응모할 수 있어요
        </MainSubTitle>
      </DrawDescription>
      <DrawGifWrapper>{product}</DrawGifWrapper>
      <Btn onClick={handleBtnClick}>토키 바로 시작하기</Btn>
    </DrawInfoWrapper>
  );
}
const DrawInfoWrapper = styled.div`
  background-color: #121212;
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: white;
  min-height: 505px;
  min-width: 375px;
`;

const DrawDescription = styled.div`
  margin-top: 86px;
`;
const DrawGifWrapper = styled.div`
  //position relative image fill하면 크기 맞춰짐
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 11px;
  margin-top: 40px;
`;
const Btn = styled.button`
  border: none;
  width: 350px;
  height: 46px;
  background: #4c0eb0;
  border-radius: 4px;
  margin-top: 60px;

  cursor: pointer;
`;
const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    margin-top: 10px;
    font-size: 10px;
  }
`;
const ProductBox = styled.div<{ ranking: number }>`
  border-radius: 6px;
  position: relative;
  width: 97px;
  height: 117px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  .circle {
    width: 20px;
    height: 20px;
    font-size: 7px;
    font-weight: 500;
  }
  ${(props) => {
    if (props.ranking === 1) {
      return css`
        width: 110px;
        height: 131px;
        background: linear-gradient(
          180deg,
          #e7c367 0%,
          #f2e1b2 50.52%,
          #c79824 100%
        );
        border-radius: 6px;
        .circle {
          width: 25px;
          height: 25px;
          font-weight: 700;
          font-size: 12px;
        }
      `;
    } else if (props.ranking === 2) {
      return css`
        background: linear-gradient(
          180deg,
          #b7b7b7 0%,
          #f5f5f5 50.52%,
          #717171 100%
        );
      `;
    } else if (props.ranking == 3) {
      return css`
        background: linear-gradient(
          180deg,
          #b7b7b7 0%,
          #f5f5f5 50.52%,
          #717171 100%
        );
      `;
    }
  }}
`;
const ProductRank = styled.div`
  border-radius: 50%;
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #4c0eb0;
  color: #fff;
  font-style: normal;
  letter-spacing: -0.4px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ImageContainer = styled.div`
  background-color: transparent;
  position: relative;
  text-align: center;
  width: 90px;
  height: 100px;
  margin: auto;
`;
