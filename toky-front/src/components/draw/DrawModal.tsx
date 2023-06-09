"use client";

import styled from "styled-components";

interface Props {
  closeModal: () => void;
}

export default function DrawModal(props: Props) {
  return (
    <Wrapper>
      <span className="content">응모가 완료되었습니다.</span>
      <Button onClick={props.closeModal}>확인</Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  height: 214px;
  padding: 24px 0 24px 0;
  border-radius: 5.927px;
  background: #ffffff;
  box-shadow: 0px 4px 4px 0px rgba(18, 18, 18, 0.25);

  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    color: #2c2c2c;
    font-family: Spoqa Han Sans Neo;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -1.2px;
  }
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 310px;
  height: 46px;
  background-color: #4c0eb0;
  border-radius: 4px;

  color: #ffffff;
  font-family: Spoqa Han Sans Neo;
  font-size: 16px;
  letter-spacing: -0.96px;
`;
