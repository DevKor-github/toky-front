"use client";
import styled from "styled-components";
import { Space } from "../common/Space";

export default function Policy() {
  const pointPolicy =
    "• 가입 시 100p • 예측/랭킹 공유 시 매일 100p (최초 300p)\n• 승부예측 참여 시 종목 당 50p\n• 적중시 항목당 100p\n• 종목 하나 5개 다 맞히면 보너스 500p ";
  const policyDetail =
    "4개 맞히면 300p\n3개 맞히면 100p\n(적중 포인트는 경기 당일 오후 9시 지급)";
  const giftPayment =
    "• 2023.09.16 추첨 후, 회원가입 전화번호를 통해 개별 연락\n• (언제)까지 미응답시, 당첨 자동 취소\n• 조건 생각하기- 탈퇴시, 부정행위(?)시, 중복 회원가입시(?)";
  return (
    <Wrapper>
      <div className="title">응모 기간</div>
      <Space h={10} />
      <div className="content">2023.09.01 ~ 2023.09.15 23:59 (익일 추첨)</div>
      <Space h={26} />
      <div className="title">포인트 지급 방침</div>
      <Space h={9} />
      <div className="content">
        {pointPolicy}
        <div style={{ paddingLeft: 15 }}>{policyDetail}</div>
      </div>
      <Space h={26} />
      <div className="title">상품 지급 안내</div>
      <Space h={10} />
      <div className="content">{giftPayment}</div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: #121212;
  padding: 43px 0px 53px 22px;

  .title {
    color: rgba(255, 255, 255, 0.6);
    font-family: Spoqa Han Sans Neo;
    font-size: 15px;
    font-weight: 700;
    letter-spacing: -0.6px;
  }

  .content {
    color: rgba(255, 255, 255, 0.6);
    font-family: Spoqa Han Sans Neo;
    font-size: 12px;
    font-weight: 400;
    line-height: 150%;
    white-space: pre-wrap;
  }
`;
