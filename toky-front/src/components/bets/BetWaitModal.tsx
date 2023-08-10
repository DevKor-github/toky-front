"use client";
import { ShareProps } from "../share/SharePrediction";
import Modal from "../common/Modal";

export default function BetWaitModal({ clickModal }: ShareProps) {
  return (
    <Modal clickModal={clickModal}>
      <p>잠시 후 다시 눌러주세요!</p>
    </Modal>
  );
}
