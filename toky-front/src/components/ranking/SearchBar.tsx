"use client";

import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import search from "../../../public/image/search.svg";
import verticalAlignTop from "../../../public/image/vertical_align_top.svg";

export default function SearchBar() {
  const [inputFocus, setInputFocus] = useState(false);

  return (
    <Wrapper>
      <SearchArea focused={inputFocus}>
        <SearchInput
          className="input"
          placeholder="닉네임을 검색하세요"
          onFocus={() => setInputFocus(true)}
          onBlur={() => setInputFocus(false)}
        />
        <Image src={search} alt="search" />
      </SearchArea>
      <Image
        src={verticalAlignTop}
        alt="top"
        style={{ marginTop: 14 }}
        //onClick={onClick}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 64px;
  padding: 0 20px;
  background-color: #121212;
`;

const SearchArea = styled.div<{ focused: boolean }>`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 32px);
  height: 38px;
  margin-top: 5px;
  padding: 0 16px;
  border: 1px solid
    ${({ focused }) =>
      focused ? "rgba(255, 255, 255, 0.87)" : "rgba(255, 255, 255, 0.38)"};
  border-radius: 4px;
`;

const SearchInput = styled.input`
  width: calc(100% - 35px);
  height: 100%;
  color: rgba(255, 255, 255, 0.87);
  background-color: #121212;
  outline: none;
  border: none;
`;
