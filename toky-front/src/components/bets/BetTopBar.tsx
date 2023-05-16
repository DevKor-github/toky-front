"use client";

import { useRouter } from "next/navigation";
import { styled } from "styled-components";
import LeftArrow from "../../../public/image/leftarrow.webp";
import Image from "next/image";
//import "./BetTopBar.css"
export default function BetTopBar() {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };

  return (
    <TopBarWrapper>
      <Image
        style={{ position: "absolute", left: "16px", bottom: "14px" }}
        onClick={handleBack}
        src={LeftArrow}
        alt="back"
        width={20}
      />
      <Title>
        <h4>2023 정기전 승부예측</h4>
      </Title>
    </TopBarWrapper>
  );
}

const TopBarWrapper = styled.div`
  width: 100%;
  height: 100px;
  position: relative;
`;
const Title = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  bottom: 14px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
`;
const H4 = styled.h4``;

const Arrow = styled.span``;
