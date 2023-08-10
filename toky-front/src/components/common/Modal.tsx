"use client";

import { easeInOut, motion } from "framer-motion";
import React from "react";
import { styled } from "styled-components";

export default function Modal({
  children,
  clickModal,
}: {
  children: React.ReactNode;
  clickModal: () => void;
}) {
  return (
    <ModalWrapper>
      <ModalContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.3,
          ease: easeInOut,
        }}
      >
        {children}
        <CheckContainer onClick={clickModal}>확인</CheckContainer>{" "}
      </ModalContainer>
    </ModalWrapper>
  );
}

const ModalContainer = styled(motion.div)`
  border-radius: 6px;
  background: var(--white-0, #fff);
  /* 그림자 */
  box-shadow: 0px 4px 4px 0px rgba(18, 18, 18, 0.25);
  width: 350px;
  height: 214px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  p {
    color: var(--black-6, #2c2c2c);
    font-family: Spoqa Han Sans Neo;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -1.2px;
    margin-top: 68px;
  }
`;
const CheckContainer = styled.button`
  width: 310px;
  height: 46px;
  border-radius: 4px;
  background: #4c0eb0;
  margin-top: 51px;
`;

const ModalWrapper = styled.div`
  z-index: 10;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(2px);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
