import { styled } from "styled-components";
import React, { Dispatch, SetStateAction } from "react";
import { downloadImage, shareImage } from "./ShareFunction";
interface ShareBtn {
  clickModal: () => void;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  imgRef: React.RefObject<HTMLDivElement>;
  mode: number;
}

function ShareBtn({ clickModal, setIsLoading, imgRef, mode }: ShareBtn) {
  return (
    <BtnContainer>
      <Btn onClick={clickModal}>
        <img
          src="/image/ShareClose.svg"
          alt="close icon"
          style={{
            width: "15px",
            paddingTop: "5px",
          }}
        />
      </Btn>
      <Btn onClick={() => downloadImage({ imgRef, setIsLoading, mode })}>
        <img
          src="/image/DownloadIcon.svg"
          alt="Download icon"
          style={{
            width: "17px",
            paddingTop: "3px",
          }}
        />
      </Btn>
      <Btn onClick={() => shareImage({ imgRef, setIsLoading, mode })}>
        <img
          src="/image/ShareIcon.svg"
          alt="Share icon"
          style={{
            width: "22px",
            paddingTop: "10px",
            paddingRight: "1px",
          }}
        />
      </Btn>
    </BtnContainer>
  );
}

const BtnContainer = styled.div`
  /* margin-top: 18px; */
  display: flex;
  justify-content: space-between;
  width: 207px;
  transform: translateY(-100%);
`;

const Btn = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 1px solid var(--87, rgba(255, 255, 255, 0.87));
  background: transparent;
  text-align: center;
`;

export default ShareBtn;
