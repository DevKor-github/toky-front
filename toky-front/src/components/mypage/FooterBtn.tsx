"use client";
import styled from "styled-components";

interface Props {
  clickable: string;
  onClick: () => void;
}

export default function FooterBtn(props: Props) {
  return (
    <Button clickable={props.clickable} onClick={props.onClick}>
      수정하기
    </Button>
  );
}

const Button = styled.button<{ clickable: string }>`
  position: fixed;
  bottom: 0px;
  border: none;
  background-color: #1f1f1f;
  width: 100%;
  height: 80px;
  color: ${(props) =>
    props.clickable === "true"
      ? "rgba(255,255,255,1)"
      : "rgba(255,255,255,0.15)"};
  font-family: Spoqa Han Sans Neo;
  font-size: 20px;
  font-weight: 700;

  cursor: ${(props) => (props.clickable === "true" ? "pointer" : "auto")};
`;
