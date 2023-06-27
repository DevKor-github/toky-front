"use client";
import SharePrediction from "@/components/share/SharePrediction";
import { useState } from "react";

export default function Share() {
  const [showModal, setShowModal] = useState(false);
  function clickModal() {
    setShowModal(!showModal);
  }
  return (
    <>
      <div onClick={clickModal} style={{ backgroundColor: "black" }}>
        modal
      </div>
      {showModal && <SharePrediction clickModal={clickModal}></SharePrediction>}
    </>
  );
}
