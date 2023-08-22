"use client";

import styled, { css } from "styled-components";
import Image from "next/image";
import YonseiToky from "../../../public/image/YonseiProfileToky.png";
import KoreaToky from "../../../public/image/KoreaProfileToky.png";

import { RankingItemT } from "./RankingInfo";

export default function RankingItem(props: RankingItemT) {
  return (
    <Wrapper highlight={props.highlight} rank={props.rank}>
      <Flex>
        <span
          style={{
            fontWeight: 700,
            fontSize:
              props.rank >= 1000
                ? 18
                : props.rank >= 100
                ? 20
                : props.rank >= 10
                ? 22
                : 25,
            width: 45,
            textAlign: "center",
          }}
        >
          {props.rank}
        </span>
        <Space w={17} />
        <ProfileImage univ={props.university}>
          {props.university === 0 && (
            <Image
              src={KoreaToky}
              alt="profile-image"
              width={37}
              height={37}
              style={{ borderRadius: "20px" }}
            />
          )}
          {props.university === 1 && (
            <Image
              src={YonseiToky}
              alt="profile-image"
              width={37}
              height={37}
              style={{ borderRadius: "20px" }}
            />
          )}
        </ProfileImage>
        <Space w={9} />
        <Flex style={{ flexDirection: "column", alignItems: "flex-start" }}>
          <span style={{ fontSize: 10 }}>
            {props.university === 0 ? "고려대학교" : "연세대학교"}
          </span>
          <span style={{ fontSize: 16, whiteSpace: "nowrap" }}>
            {props.name}
          </span>
        </Flex>
      </Flex>
      <div style={{ fontSize: 22 }}>{props.point}p</div>
    </Wrapper>
  );
}

const Wrapper = styled.div<{ highlight: boolean; rank: number }>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 74px;
  padding: 0 33px 0 28px;
  background-color: #121212;
  color: rgba(255, 255, 255, 0.87);
  ${(props) =>
    props.highlight &&
    css`
      background-color: #1f1f1f;
    `}
  ${(props) => {
    if (props.rank === 1) {
      return css`
        color: gold;
      `;
    } else if (props.rank === 2) {
      return css`
        color: rgba(255, 190, 64, 1);
      `;
    } else if (props.rank === 3) {
      return css`
        color: #f09e00;
      `;
    }
  }}
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
