"use client";

import Modal from "../common/Modal";
import { modalStatusT } from "./DrawGift";

interface Props {
  modalStatus: modalStatusT;
  closeModal: () => void;
  completeDraw: () => void;
}

export default function DrawModal({
  modalStatus,
  closeModal,
  completeDraw,
}: Props) {
  const clickModal = () => {
    closeModal();
    if (modalStatus === "success") completeDraw();
  };

  return (
    <Modal clickModal={clickModal}>
      <p>
        {modalStatus === "success"
          ? "응모가 완료되었습니다."
          : "응모에 실패했습니다."}
      </p>
    </Modal>
  );
}
