"use client";

import styled from "styled-components";
import Image from "next/image";
import toky_bg from "../../../public/image/toky_login_img.png";
import Logo from "../../../public/image/logo.svg";

export default function LoginComponent() {
  const kakaoLogin = async () => {
    window.location.href = process.env.NEXT_PUBLIC_API_URL + "/auth/kakao";
  };

  const naverLogin = async () => {
    window.location.href = process.env.NEXT_PUBLIC_API_URL + "/auth/naver";
  };

  return (
    <LoginContainer>
      <div className="logo">
        <Image className="toky_logo" src={Logo} alt="logo" />
      </div>
      <div className="bg">
        <Image className="toky_bg" src={toky_bg} alt="bg" />
        <div className="login">
          <LoginBtn className="kakao" onClick={kakaoLogin}>
            카카오톡으로 시작하기
          </LoginBtn>
          <LoginBtn className="naver" onClick={naverLogin}>
            네이버로 시작하기
          </LoginBtn>
        </div>
      </div>
    </LoginContainer>
  );
}

const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  & .logo {
    margin-top: 4vh;
    z-index: 2;
    & img {
      display: block;
      margin: 0 auto;
      width: 80%;
      height: auto;
    }
  }
  & .bg {
    display: flex;
    justify-content: center;
    flex-direction: column;

    width: 100%;

    & img {
      display: block;
      width: 100%;
      height: auto;
      object-fit: contain;
    }
  }
  .login {
    display: flex;
    justify-content: center;
    flex-direction: column;

    margin: 0 auto;
    width: 100%;

    transform: translateY(-12%);
  }
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
  /* transform: translateY(-25px); */
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
