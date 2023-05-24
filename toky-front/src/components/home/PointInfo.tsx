"use client";

import Image from "next/image";
import { styled } from "styled-components";
import TokyLayout from "../../../public/image/TokyLayout.png";
import Coin from "../../../public/image/Coin.gif";
import CoinPop from "../../../public/image/CoinPop.gif";
export default function PointInfo() {
  return (
    <PointInfoWrapper>
      <PointDescription>
        <h1>적중률에 따른 포인트 지급</h1>
        <h4>어쩌구 저쩌구</h4>
      </PointDescription>
      <PointGifWrapper>
        <PointGif>
          <Image
            src={TokyLayout}
            alt="Toky layout"
            width={231}
            height={222}
            style={{ position: "absolute", left: "0px", zIndex: "1" }}
          />
          <Image
            src={Coin}
            alt="coin"
            width={88}
            height={88}
            style={{
              position: "absolute",
              top: "48px",
              right: "71px",
              zIndex: "1",
            }}
          />
          <Image
            src={CoinPop}
            alt="coin pop"
            width={500}
            height={500}
            style={{
              position: "absolute",
              transform: "translate(-50%, -30%)",
              zIndex: "0",
            }}
          />
        </PointGif>
      </PointGifWrapper>
    </PointInfoWrapper>
  );
}
const PointInfoWrapper = styled.div`
  background-color: #222222;
  height: 417px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: white;
  position: relative;
`;

const PointDescription = styled.div``;
const PointGifWrapper = styled.div`
  position: absolute;
  bottom: 0px;
`;
const PointGif = styled.div`
  //position relative image fill하면 크기 맞춰짐

  width: 231px;
  height: 222px;
  position: relative;
`;
