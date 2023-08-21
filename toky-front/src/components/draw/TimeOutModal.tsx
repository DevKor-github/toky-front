"use client";
import { ShareProps } from "../share/SharePrediction";
import Modal from "../common/Modal";

export default function TimeOutModal({ clickModal }: ShareProps) {
  return (
    <Modal clickModal={clickModal}>
      <p>응모 기간이 지났습니다.</p>
    </Modal>
  );
}
