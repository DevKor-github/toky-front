"use client";

import { styled } from "styled-components";

export default function MainFooter() {
  return (
    <MainFooterWrapper>
      <DevInfo></DevInfo>
      <SupportInfo></SupportInfo>
    </MainFooterWrapper>
  );
}

const MainFooterWrapper = styled.div`
  width: 100%;
  height: 113px;
  background: #000000;
`;

const DevInfo = styled.div``;
const SupportInfo = styled.div``;
