"use-client";

import styled from "styled-components";
import Image, { StaticImageData } from "next/image";
import { Space } from "../common/Space";

interface Props {
  title: string;
  img?: StaticImageData;
  src: string;
  date: string;
}

export default function ArticleItem(props: Props) {
  return (
    <Wrapper>
      <div style={{ flexDirection: "column" }}>
        <Title>{props.title}</Title>
        <Space h={8} />
        <Detail>
          <span>{props.src}</span>
          <span>|</span>
          <span>{props.date}</span>
        </Detail>
      </div>
      {props.img && <Img src={props.img} alt="img" />}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 90px;
  gap: 14px;
  padding: 8px 0 8px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
`;

const Title = styled.div`
  color: #ffffff;
  font-size: 17px;
  font-family: Spoqa Han Sans Neo;
  line-height: 150%;
  letter-spacing: -0.68px;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Detail = styled.div`
  display: flex;
  gap: 11px;
  color: rgba(255, 255, 255, 0.38);
  font-size: 11px;
  font-family: Spoqa Han Sans Neo;
  font-weight: 400;
  letter-spacing: -0.44px;
`;

const Img = styled(Image)`
  width: 74px;
  height: 74px;
  border-radius: 4px;
  opacity: 0.8;
`;
