"use client";
import { useContext, useState, useEffect, useMemo } from "react";
import styled from "styled-components";
import { Space } from "../common/Space";
import ProfileImg from "./ProfileImg";
import FooterBtn from "./FooterBtn";
import AuthContext from "../common/AuthContext";
import ModalPortal from "../common/ModalPortal";
import NameChangeModal from "./NameChangeModal";
import client from "@/lib/httpClient";

export default function UserInfo() {
  const authCtx = useContext(AuthContext);
  const [nickname, setNickname] = useState<string>(authCtx.nickname);
  const [duplicate, setDuplicate] = useState<boolean | undefined>(undefined);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const clickable =
    authCtx.nickname !== nickname && duplicate === false ? "true" : "false";

  const phoneNum =
    authCtx.phoneNum.slice(0, 3) +
    "-" +
    authCtx.phoneNum.slice(3, 7) +
    "-" +
    authCtx.phoneNum.slice(7, 11);

  const checkDuplicateName = async () => {
    const res = await client.get(`/auth/checkname?name=${nickname}`);

    if (res.data === true) {
      setDuplicate(false);
    } else {
      setDuplicate(true);
    }
  };

  const handleNicknameChange = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    if (target.value.length > 10) {
      target.value = target.value.slice(0, 10);
    }
    setDuplicate(undefined);
    setNickname(target.value);
  };

  const updateNickname = async () => {
    if (clickable === "false") return;

    const res = await client.patch("/auth/update/name", { name: nickname });
    console.log("res", res);
    setDuplicate(undefined);
    authCtx.setNickname(nickname);
    setModalOpen(true);
  };

  useEffect(() => {
    setNickname(authCtx.nickname);
  }, [authCtx.nickname]);

  return (
    <>
      <InfoWrapper>
        <Flex>
          <ProfileImg />
        </Flex>
        <Space h={25} />
        <Flex style={{ gap: 46 }}>
          {authCtx.nickname && (
            <Flex style={{ alignItems: "flex-start", gap: 16 }}>
              <Info>닉네임</Info>
              <Flex
                style={{
                  alignItems: "flex-start",
                  gap: 9,
                  position: "relative",
                }}
              >
                <Label>
                  <input
                    value={nickname}
                    onChange={handleNicknameChange}
                    spellCheck={false}
                  />
                  {authCtx.nickname !== nickname && (
                    <button onClick={checkDuplicateName}>중복확인</button>
                  )}
                </Label>
                <Flex
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <NickNameCounter>{nickname?.length}/10</NickNameCounter>
                  <CheckText>
                    {duplicate == true
                      ? "이미 존재하는 닉네임입니다."
                      : duplicate == false && "사용 가능한 닉네임입니다."}
                  </CheckText>
                </Flex>
              </Flex>
            </Flex>
          )}
          {authCtx.university && (
            <Flex style={{ alignItems: "flex-start", gap: 16 }}>
              <Info>학교</Info>
              <Content>{authCtx.university}</Content>
            </Flex>
          )}
          {authCtx.phoneNum && (
            <Flex style={{ alignItems: "flex-start", gap: 16 }}>
              <Info>전화번호</Info>
              <Content>{phoneNum}</Content>
            </Flex>
          )}
        </Flex>
      </InfoWrapper>
      <FooterBtn clickable={clickable} onClick={updateNickname} />
      <ModalPortal isShowing={modalOpen}>
        <NameChangeModal clickModal={() => setModalOpen(false)} />
      </ModalPortal>
    </>
  );
}

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 20px 24px 20px;
`;

const Flex = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Info = styled.div`
  color: rgba(255, 255, 255, 0.6);
  font-family: Spoqa Han Sans Neo;
  font-size: 15px;
  letter-spacing: -0.6px;
`;

const Content = styled.div`
  padding-left: 4px;
  color: #ffffff;
  font-family: Spoqa Han Sans Neo;
  font-size: 17px;
  font-weight: 400;
  letter-spacing: -1.02px;
`;

const NickNameCounter = styled.div`
  color: rgba(255, 255, 255, 0.6);
  font-family: Spoqa Han Sans Neo;
  font-size: 14px;
`;

const CheckText = styled.div`
  color: #757575;
  font-family: Spoqa Han Sans Neo;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: -0.72px;
`;

const Label = styled.label`
  position: relative;
  width: 100%;
  max-width: 450px;

  input {
    width: 100%;
    height: 31px;
    background-color: #121212;
    border: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.15);

    color: #ffffff;
    font-family: Spoqa Han Sans Neo;
    font-size: 17px;
    font-weight: 400;
    letter-spacing: -1.02px;

    &:focus {
      outline: none;
      border-bottom: 1px solid rgba(255, 255, 255, 0.6);
    }
  }
  button {
    position: absolute;
    top: 6px;
    right: 0;
    background-color: #121212;
    color: rgba(255, 255, 255, 0.87);
    font-family: Spoqa Han Sans Neo;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: -0.72px;
  }
`;
