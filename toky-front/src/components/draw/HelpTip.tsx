"use client";
import styled from "styled-components";
import Image from "next/image";
import close from "../../../public/image/close.svg";

interface Props {
  closeHelpTip: () => void;
}

export default function HelpTip({ closeHelpTip }: Props) {
  return (
    <Wrapper>
      <span>승부예측을 통해 포인트를 얻을 수 있어요!</span>
      <Image alt="close" src={close} onClick={closeHelpTip} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  top: 20px;
  left: -25px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 200px;
  height: 29px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.87);

  color: #1f1f1f;
  font-family: Spoqa Han Sans Neo;
  font-size: 10px;
  font-weight: 400;
  letter-spacing: -0.4px;
`;
