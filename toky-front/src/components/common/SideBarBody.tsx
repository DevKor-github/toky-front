import React, { ForwardedRef, useContext, useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";
import Setting from "../../../public/image/Setting.svg";
import Avatar from "../../../public/image/Avatar.png";
import AuthContext from "./AuthContext";
import client from "@/lib/httpClient";
import Link from "next/link";

const Wrapper = styled.div`
  position: fixed;
  top: 0px;
  left: 100%;
  height: 100%;
  width: 331px;
  background-color: #222222;
  transition: 1s ease;
  z-index: 10;
  &.open {
    left: calc(100% - 331px);
    transition: 1s ease;
  }
`;

const UnivName = styled.div`
  margin-top: 15px;

  color: ${(props) =>
    props.children === "고려대학교" ? "#FF8586" : "#5B84FF"};
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 13px;
  display: flex;
  align-items: center;
  letter-spacing: -0.04em;
`;
const UserName = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  display: flex;
  align-items: center;
  letter-spacing: -0.06em;
  color: #ffffff;
`;
const FlexWrapper = styled.div`
  display: flex;
`;
const DivBar = styled.div`
  margin-left: 14px;
  margin-top: 16px;
  width: 304px;
  height: 0px;
  border: 1px solid rgba(255, 255, 255, 0.15);
`;
const NavWrapper = styled.div`
  margin-left: 26px;
  margin-top: 50px;
`;
const NavItem = styled.div`
  padding-top: 15px;
  margin-top: 5px;
  padding-bottom: 15px;
  margin-bottom: 5px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height */
  display: flex;
  align-items: center;
  letter-spacing: -0.06em;

  /* 투명도_87 */
  color: rgba(255, 255, 255, 0.87);
  cursor: pointer;

  &:hover {
    color: #f8f8f8;
    text-decoration: underline;
  }
`;

const InfoWrapper = styled.div`
  margin-top: 18px;
  flex-direction: column;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  /* identical to box height */
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.04em;

  /* 투명도_60 */
  color: rgba(255, 255, 255, 0.6);
`;

const InfoDetail = styled.div`
  margin-top: 5px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height */
  display: flex;
  align-items: center;
  text-align: center;

  /* 투명도_87 */
  color: rgba(255, 255, 255, 0.87);
`;

function SideBarBodyFC(
  { isBarOpen = true },
  ref: ForwardedRef<HTMLDivElement>
) {
  const authCtx = useContext(AuthContext);
  useEffect(() => {
    if (authCtx.nickname === "") {
      client
        .get("/auth/profile")
        .then((res) => res.data)
        .then((user) => {
          authCtx.setNickname(user.name);
          const uni = user.university === 0 ? "고려대학교" : "연세대학교";
          authCtx.setUniv(uni);
          authCtx.setScore(user.score);
          authCtx.setRemain(user.remain);
          authCtx.setPhoneNum(user.phoneNumber);
        })
        .catch((err) => {
          window.location.href = "/login";
        });
    }
  }, []);
  return (
    <Wrapper ref={ref} className={isBarOpen ? "open" : ""}>
      <FlexWrapper style={{ marginTop: 72, paddingLeft: 27, paddingRight: 20 }}>
        <FlexWrapper style={{ flexDirection: "column" }}>
          <UnivName>{authCtx.university}</UnivName>
          <UserName>{authCtx.nickname}</UserName>
        </FlexWrapper>
        <Link href="/mypage">
          <Image
            src={Setting}
            alt="setting"
            style={{ marginTop: 32.5, marginLeft: 6 }}
          />
        </Link>
        <Image src={Avatar} alt="avatar" style={{ marginLeft: "auto" }} />
      </FlexWrapper>
      <DivBar />
      <FlexWrapper style={{ justifyContent: "space-around" }}>
        <InfoWrapper>
          남은 포인트
          <InfoDetail>{authCtx.remain}</InfoDetail>
        </InfoWrapper>
        <InfoWrapper>
          누적 포인트
          <InfoDetail>{authCtx.score}</InfoDetail>
        </InfoWrapper>
      </FlexWrapper>
      <DivBar />
      <NavWrapper>
        <Link href={"/analysis"}>
          <NavItem>전력분석</NavItem>
        </Link>
        <Link href={"/analysis-more"}>
          <NavItem>선수정보</NavItem>
        </Link>
        <Link href={"/bets"}>
          <NavItem>승부예측</NavItem>
        </Link>

        <Link href={"/ranking"}>
          <NavItem>랭킹</NavItem>
        </Link>

        <Link href={"/draw"}>
          <NavItem>경품응모</NavItem>
        </Link>

        <NavItem>문의하기</NavItem>
        <NavItem
          onClick={() => {
            client.get("/auth/logout").then((res) => {
              localStorage.removeItem("accessToken");
              localStorage.removeItem("refreshToken");
              window.location.href = "/";
            });
          }}
        >
          로그아웃
        </NavItem>
      </NavWrapper>
    </Wrapper>
  );
}

const SideBarBody = React.forwardRef(SideBarBodyFC);

export default SideBarBody;
