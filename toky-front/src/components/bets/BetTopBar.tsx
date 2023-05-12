"use client";

import { useRouter } from "next/navigation";
import { styled } from "styled-components";
import LeftArrow from "../../../public/image/leftarrow.webp";
import Image from "next/image";

export default function BetTopBar(){
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };

  return (
    <Wrapper>
      <TopBarContainer>
        <Image onClick={handleBack} src={LeftArrow} alt="back" width={20} />
        <Title>2023 정기전 승부예측</Title>
      </TopBarContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 20px;
  height: 40px;
`;

const TopBarContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  & img {
    margin-left: 16px;
    cursor: pointer;
  }
`;

const Title = styled.h4`
  position: absolute;
  width: 154px;
  height: 23px;
  left: calc(50% - 154px / 2);
  top: 65px;

  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  /* identical to box height */

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.06em;

  color: rgba(255, 255, 255, 0.87);
`;
