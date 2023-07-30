"use client";

import styled from "styled-components";
import Image from "next/image";
import Logo from "../../../public/image/Logo.webp";

export default function LoginComponent() {
  const kakaoLogin = async () => {
    window.location.href = process.env.NEXT_PUBLIC_API_URL + "/auth/kakao";
  };

  const naverLogin = async () => {
    window.location.href = process.env.NEXT_PUBLIC_API_URL + "/auth/naver";
  };

  return (
    <LoginContainer>
      <LogoWrapper>
        <Image src={Logo} alt="logo" />
      </LogoWrapper>
      <LoginBtn className="kakao" onClick={kakaoLogin}>
        카카오톡으로 시작하기
      </LoginBtn>
      <LoginBtn className="naver" onClick={naverLogin}>
        네이버로 시작하기
      </LoginBtn>
    </LoginContainer>
  );
}

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const LogoWrapper = styled.div`
  width: 180px;
  height: 147px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 54px;
  margin-top: 134px; // temporary
`;

const LoginBtn = styled.button`
  width: 90%;
  height: 46px;
  text-align: center;
  margin-bottom: 8px;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
  border-radius: 4px;
  color: #121212;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.06em;
  border: none;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  &.kakao {
    background: #ffbe16;
  }

  &.naver {
    background: #13e059;
  }
`;
