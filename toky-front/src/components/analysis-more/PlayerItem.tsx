"use-client";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Image, { StaticImageData } from "next/image";

interface Props {
  img: StaticImageData;
  name: string;
  backNum: number;
  position: string;
  studentId: number;
  body: string;
  univ: number;
}

export default function PlayerItem({
  img,
  name,
  backNum,
  position,
  studentId,
  body,
  univ,
}: Props) {
  const [isClicked, setIsClicked] = useState(false);
  useEffect(() => {
    setIsClicked(false);
  }, [name]);
  return (
    <Wrapper onClick={() => setIsClicked(!isClicked)}>
      {univ === 0 && (
        <CopyRight>
          <p>©SPORTS KU</p>
        </CopyRight>
      )}
      {univ === 1 && (
        <CopyRight>
          <p>연세대학교 시스붐바 제공</p>
        </CopyRight>
      )}
      <Image
        src={img.src}
        alt="player"
        fill
        sizes="110px,110px,110px"
        style={{ objectFit: "cover" }}
      />
      {isClicked && (
        <Info>
          <div className="detail">
            <span className="detail-label">백넘버</span>
            <span className="detail-value">{backNum}</span>
          </div>
          <div className="detail">
            <span className="detail-label">포지션</span>
            <span className="detail-value">{position}</span>
          </div>
          <div className="detail">
            <span className="detail-label">학번</span>
            <span className="detail-value">{studentId}</span>
          </div>
          <div className="detail">
            <span className="detail-label">키/몸무게</span>
            <span className="detail-value">{body}</span>
          </div>
        </Info>
      )}
      <Name $isClicked={isClicked}>{name}</Name>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 110px;
  height: 110px;
  border-radius: 4px;
  position: relative;
  background-color: white;
  img {
    border-radius: 4px;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  padding: 9px 0 0 9px;
  background: rgba(18, 18, 18, 0.8);
  backdrop-filter: blur(2px);
  color: rgba(255, 255, 255, 0.87);
  font-family: Spoqa Han Sans Neo;

  .detail {
    display: flex;
    gap: 5px;
    align-items: center;
  }

  .detail-label {
    font-size: 10px;
    font-weight: 700;
    letter-spacing: -0.6px;
  }

  .detail-value {
    font-size: 14.5px;
    letter-spacing: -0.87px;
  }
`;

const Name = styled.div<{ $isClicked: boolean }>`
  display: flex;
  justify-content: flex-end;
  height: 24px;
  padding-right: 7px;
  border-radius: 0px 0px 4px 4px;
  background: rgba(255, 255, 255, 0.38);
  backdrop-filter: blur(2px);

  color: #1f1f1f;
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.56px;

  ${({ $isClicked }) =>
    $isClicked && "color: #ffffff; background: rgba(18, 18, 18, 0.8);"}
`;

const CopyRight = styled.div`
  position: absolute;
  top: 0%;
  left: 0%;
  p {
    font-size: 1px;
    color: rgba(0, 0, 0, 0.2);
  }
`;
