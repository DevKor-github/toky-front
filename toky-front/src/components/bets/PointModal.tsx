"use client";
import {
  NotCompleteModalContainer as PointModalWrapper,
  CheckContainer,
  ModalWrapper,
  ShareProps,
} from "../share/SharePrediction";

export default function PointModal({ clickModal }: ShareProps) {
  return (
    <ModalWrapper>
      <PointModalWrapper>
        <p>승부예측 참여로 10P가 지급되었습니다.</p>
        <CheckContainer onClick={clickModal}>확인</CheckContainer>
      </PointModalWrapper>
    </ModalWrapper>
  );
}
