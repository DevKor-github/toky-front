"use client";
import styled from "styled-components";
import Image from "next/image";
import Avatar from "../../../public/image/defaultProfile.svg";
import Edit from "../../../public/image/edit.svg";

export default function ProfileImg() {
  return (
    <Wrapper>
      <Image
        src={Avatar}
        alt="profile-image"
        style={{ width: 70, height: 70, borderRadius: 35 }}
      />
      <Image
        src={Edit}
        alt="edit"
        style={{ position: "absolute", bottom: 0, right: 0 }}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
`;
