"use client";
import styled from "styled-components";
import Image from "next/image";
import KoreaProfile from "../../../public/image/korea_profile.png";
import YonseiProfile from "../../../public/image/yonsei_profile.png";

interface Props {
  univ: string;
}

export default function ProfileImg({ univ }: Props) {
  return (
    <Wrapper>
      <Image
        src={univ === "고려대학교" ? KoreaProfile : YonseiProfile}
        alt="profile-image"
        style={{
          width: 70,
          height: 70,
          borderRadius: 35,
          border: "1px solid rgba(255, 255, 255, 0.3)",
        }}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
`;
