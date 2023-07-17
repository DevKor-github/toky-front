"use client";
import SharePrediction from "@/components/share/SharePrediction";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function Share() {
  const [showModal, setShowModal] = useState(false);
  const [portalElement, setProtalElement] = useState<Element | null>(null);
  useEffect(() => {
    setProtalElement(document.getElementById("portal"));
  }, [showModal]);
  function clickModal() {
    setShowModal(!showModal);
  }
  return (
    <>
      <div onClick={clickModal} style={{ backgroundColor: "black" }}>
        modal
      </div>
      {showModal && portalElement
        ? createPortal(
            <SharePrediction clickModal={clickModal} />,
            portalElement
          )
        : null}
    </>
  );
}
