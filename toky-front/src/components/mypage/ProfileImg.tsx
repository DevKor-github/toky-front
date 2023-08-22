"use client";
import styled from "styled-components";
import Image from "next/image";
import YonseiToky from "../../../public/image/YonseiProfileToky.png";
import KoreaToky from "../../../public/image/KoreaProfileToky.png";
interface IProfile {
  univ: number;
}
export default function ProfileImg({ univ }: IProfile) {
  return (
    <Wrapper univ={univ}>
      {univ === 0 && (
        <Image
          src={KoreaToky}
          alt="profile-image"
          width={70}
          height={70}
          style={{ borderRadius: "35px" }}
        />
      )}
      {univ === 1 && (
        <Image
          src={YonseiToky}
          alt="profile-image"
          width={70}
          height={70}
          style={{ borderRadius: "35px" }}
        />
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div<{ univ: number }>`
  width: 70px;
  height: 70px;
  position: relative;
  background: ${({ univ }) =>
    univ === 0
      ? "linear-gradient(0deg, #f3233c 0%, #f95B6e 100%)"
      : "linear-gradient(0deg, #5b84ff 0%, #2948ff 100%)"};
  border-radius: 35px;
`;
