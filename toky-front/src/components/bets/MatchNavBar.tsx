import { match } from "assert";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { styled } from "styled-components";
//import "./MatchNavBar.css"
// 야구 축구 농구 럭비 빙구 있고 누르면 navbar 활성화 되게 navbar랑 list를 container로 감싸게

export default function MatchNavBar() {
  //index
  //match enum type으로 쏴서 질문들 받아와야함

  const pathName = usePathname();

  const isActive = 0;
  const match = pathName ? pathName.split("/")[2] : null;
  return (
    <NavBarWrapper>
      <NavBar>
        <Link
          href="/bets/0"
          style={{
            color: pathName === "/bets/0" ? "white" : "",
            borderColor: pathName === "/bets/0" ? "white" : "",
            borderTop: pathName === "/bets/0" ? "solid" : "",
            width: "60px",
            textAlign: "center",
            padding: "10px",
          }}
        >
          야구
        </Link>
        <Link
          href="/bets/1"
          style={{
            color: pathName === "/bets/1" ? "white" : "",
            borderColor: pathName === "/bets/1" ? "white" : "",
            borderTop: pathName === "/bets/1" ? "solid" : "",
            width: "60px",
            textAlign: "center",
            padding: "10px",
          }}
        >
          농구
        </Link>
        <Link
          href="/bets/2"
          style={{
            color: pathName === "/bets/2" ? "white" : "",
            borderColor: pathName === "/bets/2" ? "white" : "",
            borderTop: pathName === "/bets/2" ? "solid" : "",
            width: "60px",
            textAlign: "center",
            padding: "10px",
          }}
        >
          빙구
        </Link>
        <Link
          href="/bets/3"
          style={{
            color: pathName === "/bets/3" ? "white" : "",
            borderColor: pathName === "/bets/3" ? "white" : "",
            borderTop: pathName === "/bets/3" ? "solid" : "",
            width: "60px",
            textAlign: "center",
            padding: "10px",
          }}
        >
          럭비
        </Link>
        <Link
          href="/bets/4"
          style={{
            color: pathName === "/bets/4" ? "white" : "",
            borderColor: pathName === "/bets/4" ? "white" : "",
            borderTop: pathName === "/bets/4" ? "solid" : "",
            width: "60px",
            textAlign: "center",
            padding: "10px",
          }}
        >
          축구
        </Link>
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
`;

const NavBarWrapper = styled.div`
  display: block;
`;
