"use client";

import { styled } from "styled-components";
import Image from "next/image";
import { Space } from "../common/Space";
import devKor from "../../../public/image/devkor_logo.svg";
import aws from "../../../public/image/aws_logo.svg";
import kuaa from "../../../public/image/kuaa_logo.svg";
import sportsku from "../../../public/image/sportsku_logo.svg";
import sisboombah from "../../../public/image/sisboombah_logo.svg";

export default function MainFooter() {
  return (
    <MainFooterWrapper>
      <Flex>
        <DevInfo>
          <Text>개발</Text>
          <Image alt="devKor" src={devKor} />
        </DevInfo>
        <SupportInfo>
          <Text>후원</Text>
          <ImageFlex>
            <Image alt="aws" src={aws} />
            <Image alt="kuaa" src={kuaa} />
          </ImageFlex>
        </SupportInfo>
      </Flex>
      <Space h={28} />
      <MaterialProvisionInfo>
        <Text>자료제공</Text>
        <ImageFlex>
          <Image alt="sportku" src={sportsku} />
          <Image alt="sisboombah" src={sisboombah} />
        </ImageFlex>
      </MaterialProvisionInfo>
      <Space h={48} />
      <Copyright>
        Copyright ⓒ 2023 정기전 승부예측 토키. All Rights Reserved.
      </Copyright>
    </MainFooterWrapper>
  );
}

const MainFooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 36px 0 24px 0%;
  background: #000000;
`;

const Text = styled.div`
  color: rgba(255, 255, 255, 0.38);
  font-family: Spoqa Han Sans Neo;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: -0.4px;
`;

const Copyright = styled.div`
  color: rgba(255, 255, 255, 0.6);
  font-family: Spoqa Han Sans Neo;
  font-size: 10px;
  font-weight: 400;
  letter-spacing: -0.4px;
`;

const DevInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
const SupportInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
`;

const MaterialProvisionInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 47px;
`;

const ImageFlex = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
