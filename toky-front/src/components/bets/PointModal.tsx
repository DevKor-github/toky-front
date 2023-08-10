"use client";

import { styled } from "styled-components";
import { easeInOut, motion } from "framer-motion";

export default function PointModal() {
  return (
    <PointModalWrapper
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
