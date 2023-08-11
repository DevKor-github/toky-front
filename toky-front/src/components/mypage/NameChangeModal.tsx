"use client";
import Modal from "../common/Modal";

interface Props {
  clickModal: () => void;
}

export default function NameChangeModal(props: Props) {
  return (
    <Modal clickModal={props.clickModal}>
      <p>닉네임 변경이 완료되었습니다.</p>
    </Modal>
  );
}
