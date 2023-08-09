"use client";

import { styled } from "styled-components";
import { ShareProps } from "../share/SharePrediction";
import { easeInOut, motion } from "framer-motion";
// import { useEffect, useRef } from "react";

// function useOutSideClick(ref, callback) {
//   useEffect(() => {
//     const handleClick = (event) => {
//       if (ref.current && !ref.current.contains(event.target)) {
//         callback?.();
//       }
//     };

//     window.addEventListener("mousedown", handleClick);

//     return () => window.removeEventListener("mousedown", handleClick);
//   }, [ref, callback]);
// }
export default function PointModal({ clickModal }: ShareProps) {
  // const modalRef = useRef(null);
  // const handleClose = () => {
  //   clickModal?.();
  // };

  // useOutSideClick(modalRef, handleClose);

  return (
    <PointModalWrapper
      // ref={modalRef}
      initial={{
        y: 100,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        y: 100,
        transition: {
          duration: 0.5,
        },
      }}
      transition={{ duration: 0.5, ease: easeInOut }}
    >
      50p 지급완료!
    </PointModalWrapper>
  );
}
const PointModalWrapper = styled(motion.div)`
  width: 170px;
  height: 46px;
  border-radius: 31px;
  background: var(--60, rgba(255, 255, 255, 0.6));
  text-align: center;
  line-height: 46px;
  position: fixed;
  bottom: 3%;
  margin: 0 auto;
  left: 0;
  right: 0;
  color: var(--black-0, #121212);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  z-index: 4;
`;
