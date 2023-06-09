"use client";

import styled from "styled-components";
import Image from "next/image";
import defaultProfile from "../../../public/image/defaultProfile.svg";
import { RankingItemT } from "./RankingInfo";

interface Props {
  item: RankingItemT;
  idx: number;
}

export default function RankingItem({ item, idx }: Props) {
  return (
    <Wrapper key={idx}>
      <Flex>
        <span
          style={{
            fontWeight: 700,
            fontSize: 25,
          }}
        >
          {idx}
        </span>
        <Space w={17} />
        <ProfileImage univ={item.univ}>
          <Image
            src={item.imageUrl || defaultProfile}
            alt="profile-image"
            style={{ width: 37, height: 37, borderRadius: 20 }}
          />
        </ProfileImage>
        <Space w={9} />
        <Flex style={{ flexDirection: "column", alignItems: "flex-start" }}>
          <span style={{ fontSize: 10 }}>
            {item.univ === 0 ? "고려대학교" : "연세대학교"}
          </span>
          <span style={{ fontSize: 16 }}>유저이름열자열자열자</span>
        </Flex>
      </Flex>
      <div style={{ fontSize: 22 }}>300p</div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 74px;
  padding: 0 42px;

  color: rgba(255, 255, 255, 0.87);
`;

const Space = styled.div<{ w: number }>`
  width: ${({ w }) => `${w}px`};
`;

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileImage = styled.div<{ univ: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background: ${({ univ }) =>
    univ === 0
      ? "linear-gradient(0deg, #f3233c 0%, #f95B6e 100%)"
      : "linear-gradient(0deg, #5b84ff 0%, #2948ff 100%)"};
`;
