"use client";
import { ShareProps } from "../share/SharePrediction";
import Modal from "../common/Modal";

export default function BetFailModal({ clickModal }: ShareProps) {
  return (
    <Modal clickModal={clickModal}>
      <p>서버에서 예측을 처리하지 못 했습니다.</p>
    </Modal>
  );
}
