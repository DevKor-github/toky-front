"use client";

import styled from "styled-components";
import Image from "next/image";
import Logo from "../../../public/image/LoginLogo.png";
import Character from "../../../public/image/LoginCharacter.png";
export default function LoginComponent() {
  const kakaoLogin = async () => {
    window.location.href = process.env.NEXT_PUBLIC_API_URL + "/auth/kakao";
  };

  const naverLogin = async () => {
    window.location.href = process.env.NEXT_PUBLIC_API_URL + "/auth/naver";
  };

  return (
    <LoginContainer>
      {/* <LogoWrapper>
        <Image src={Logo} alt="logo" />
      </LogoWrapper> */}
      <ImageContainer>
        <LogoImage src={Logo} width={239} height={76.5} alt="logo" />
        <CharacterImage src={Character} alt="character" fill />
        <LoginBtnContainer>
          <LoginBtn className="kakao" onClick={kakaoLogin}>
            카카오톡으로 시작하기
          </LoginBtn>
          <LoginBtn className="naver" onClick={naverLogin}>
            네이버로 시작하기
          </LoginBtn>
        </LoginBtnContainer>
      </ImageContainer>
    </LoginContainer>
  );
}

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 95vh;
  width: 100%;
`;
const ImageContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;

  text-align: center;
`;
const LogoImage = styled(Image)`
  position: absolute;
  left: 50%;
  top: 20%;
  z-index: 1;
  transform: translate(-50%, -50%);
`;
const CharacterImage = styled(Image)`
  /* position: absolute;
  left: 62%;
  transform: translate(-50%, 0); */
  object-fit: cover;
  object-position: 42% bottom;
  max-width: 1000px;
`;
const LogoWrapper = styled.div`
  width: 180px;
  height: 147px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 54px;
  margin-top: 134px; // temporary
`;
const LoginBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: absolute;
  width: 100%;
  bottom: 1%;
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
