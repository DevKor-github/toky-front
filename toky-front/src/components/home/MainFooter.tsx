"use client";

import { css, styled } from "styled-components";
import Image from "next/image";
import { Space } from "../common/Space";
import devKor from "../../../public/image/devkor_logo.png";
import aws from "../../../public/image/aws_logo.png";
import kuaa from "../../../public/image/kuaa_logo.png";
import sportsku from "../../../public/image/sportsku_logo.png";
import sisboombah from "../../../public/image/sisboombah_logo.png";
import sportskuCover from "../../../public/image/sportsku_cover.png";
import { RefObject, useEffect, useRef, useState } from "react";

export default function MainFooter() {
  const ref = useRef<HTMLImageElement | null>(null);
  const [isKuSportsOpen, setIsKuSportsOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsKuSportsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const handleKuSportsOpen = () => {
    setIsKuSportsOpen(!isKuSportsOpen);
  };

  return (
    <MainFooterWrapper>
      <Flex>
        <DevInfo>
          <Text>개발</Text>
          <Image alt="devKor" width={70} src={devKor} />
        </DevInfo>
        <SupportInfo>
          <Text>후원</Text>
          <ImageFlex>
            <Image alt="aws" width={44} src={aws} />
            <Image alt="kuaa" width={38} src={kuaa} />
          </ImageFlex>
        </SupportInfo>
      </Flex>
      <Space h={28} />
      <MaterialProvisionInfo>
        <Text>자료제공</Text>
        <ImageFlex>
          <Image
            alt="sportku"
            width={91}
            src={sportsku}
            onClick={handleKuSportsOpen}
            ref={ref as RefObject<HTMLImageElement>}
          />
          <Image alt="sisboombah" width={106} src={sisboombah} />
        </ImageFlex>
        <KuSportsInfo visible={isKuSportsOpen}>
          <Image alt="sports ku cover" src={sportskuCover} width={300} />
          <div>앞서가는 대학 스포츠 문화 월간지 SPORTS KU!</div>
          <div>다양한 방식으로 SPORTS KU를 만나보세요.</div>
          <div>메일 | sportsku@naver.com</div>
          <div>블로그 | blog.naver.com/sportsku</div>
          <div>유튜브 | youtube.com/user/sp0rtsku</div>
          <div>인스타그램 | @sports_ku</div>
          <div>1년 정기구독 30,000원 (배송료 포함, 입금 확인 후 발송)</div>
          <div>송금 계좌번호 | 카카오뱅크 3333277099225 (예금주 문상은)</div>
          <div>송금 후 이름, 주소, 연락처를 sportsku@naver.com 으로 보내주시기 바랍니다</div>
          <div>문의전화 | 010-2170-4757 (부국장 문상은)</div>
        </KuSportsInfo>
      </MaterialProvisionInfo>
      <Space h={48} />
      <Copyright>Copyright ⓒ 2023 정기전 승부예측 토키. All Rights Reserved.</Copyright>
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

const KuSportsInfo = styled.div<{ visible: boolean }>`
  background-color: rgba(255, 255, 255, 0.9);
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: start;
  gap: 7px;
  width: 320px;
  top: 100px;
  padding: 10px;
  z-index: 3;
  border-radius: 10px;
  ${(props) =>
    !props.visible &&
    css`
      display: none;
    `};
  div {
    font-family: Spoqa Han Sans Neo;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: -0.4px;
    width: 100%;
  }
`;
