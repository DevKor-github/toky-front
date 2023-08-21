"use client";

import styled from "styled-components";
import Image from "next/image";
import defaultProfile from "../../../public/image/defaultProfile.svg";
import arrowRight from "../../../public/image/arrow_right.svg";
import { useContext } from "react";
import AuthContext from "../common/AuthContext";

export interface UserInfoProps {
  total: number;
  rank: number;
  searchMyRank: () => void;
  clickModal: () => void;
}

export default function UserInfo({ total, rank, searchMyRank, clickModal }: UserInfoProps) {
  const authCtx = useContext(AuthContext);
  const univ = authCtx.university === "고려대학교" ? 0 : 1;
  return (
    <Wrapper>
      <Flex style={{ alignItems: "flex-start", marginLeft: 14 }}>
        <div className="small">
          <div style={{ display: "inline-block" }}> {total}명 중</div>
        </div>
        <span className="large" onClick={searchMyRank}>
          {rank} <span className="middle">등</span>
        </span>
        <span className="underlined">{authCtx.score}points</span>
      </Flex>
      <Flex style={{ gap: 7, marginLeft: 40 }}>
        <ProfileImage univ={univ}>
          <Image
            src={defaultProfile}
            alt="profile-image"
            style={{ width: 61, height: 61, borderRadius: 33 }}
          />
        </ProfileImage>
        <span>{authCtx.nickname}</span>
      </Flex>
      <ShareButton onClick={clickModal}>
        <span>내 랭킹 공유하기</span>
        <Image src={arrowRight} alt="arrow-right" />
      </ShareButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;

  align-items: center;
  width: 100%;
  height: 135px;
  padding: 0 20px;
  background-color: #1f1f1f;
  color: rgba(255, 255, 255, 0.87);
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .small {
    display: inline-block;
    color: rgba(255, 255, 255, 0.6);
    font-size: 9px;
    max-width: 120px;
    width: fit-content;
  }

  .middle {
    font-size: 16px;
  }

  .large {
    font-weight: 700;
    font-size: 27px;
    text-decoration-line: underline;
  }

  .underlined {
    font-weight: 400;
    font-size: 12px;
  }
`;

const ProfileImage = styled.div<{ univ: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 66px;
  height: 66px;
  border-radius: 33px;
  background: ${({ univ }) =>
    univ === 0
      ? "linear-gradient(0deg, #f3233c 0%, #f95B6e 100%)"
      : "linear-gradient(0deg, #5b84ff 0%, #2948ff 100%)"};
`;

const ShareButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 108px;
  height: 29px;
  padding: 0px 9px 0px 11px;

  border: 0.861971px solid rgba(255, 255, 255, 0.87);
  border-radius: 3.5px;

  font-size: 11px;
`;
