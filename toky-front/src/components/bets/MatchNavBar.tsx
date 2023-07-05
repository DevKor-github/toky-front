import { match } from "assert";

import { usePathname } from "next/navigation";
import { styled } from "styled-components";
//import "./MatchNavBar.css"
// 야구 축구 농구 럭비 빙구 있고 누르면 navbar 활성화 되게 navbar랑 list를 container로 감싸게

interface MatchNavBarProps {
  match: Number;
  setMatch: (n: number) => void;
}

export default function MatchNavBar({ match, setMatch }: MatchNavBarProps) {
  //index
  //match enum type으로 쏴서 질문들 받아와야함

  return (
    <NavBarWrapper>
      <NavBar>
        <button
          onClick={() => {
            setMatch(0);
          }}
          style={{
            color: match === 0 ? "white" : "",
            borderColor: match === 0 ? "white" : "",
            borderTop: match === 0 ? "solid" : "",
            width: "60px",
            textAlign: "center",
            padding: "10px",
          }}
        >
          야구
        </button>
        <button
          onClick={() => {
            setMatch(1);
          }}
          style={{
            color: match === 1 ? "white" : "",
            borderColor: match === 1 ? "white" : "",
            borderTop: match === 1 ? "solid" : "",
            width: "60px",
            textAlign: "center",
            padding: "10px",
          }}
        >
          농구
        </button>
        <button
          onClick={() => {
            setMatch(2);
          }}
          style={{
            color: match === 2 ? "white" : "",
            borderColor: match === 2 ? "white" : "",
            borderTop: match === 2 ? "solid" : "",
            width: "60px",
            textAlign: "center",
            padding: "10px",
          }}
        >
          빙구
        </button>
        <button
          onClick={() => {
            setMatch(3);
          }}
          style={{
            color: match === 3 ? "white" : "",
            borderColor: match === 3 ? "white" : "",
            borderTop: match === 3 ? "solid" : "",
            width: "60px",
            textAlign: "center",
            padding: "10px",
          }}
        >
          럭비
        </button>
        <button
          onClick={() => {
            setMatch(4);
          }}
          style={{
            color: match === 4 ? "white" : "",
            borderColor: match === 4 ? "white" : "",
            borderTop: match === 4 ? "solid" : "",
            width: "60px",
            textAlign: "center",
            padding: "10px",
          }}
        >
          축구
        </button>
      </NavBar>
    </NavBarWrapper>
  );
}

const NavBar = styled.div`
  display: flex;
  justify-content: space-around;
  color: rgba(255, 255, 255, 0.38);
  margin: 0px;
  letter-spacing: -0.04em;

  & > button {
    background: none;
  }
`;

const NavBarWrapper = styled.div`
  display: block;
`;
