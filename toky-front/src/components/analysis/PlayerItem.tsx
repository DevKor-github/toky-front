import PlayerImage from "../../../public/image/Logo.webp";
import { styled, css } from "styled-components";
import Image from "next/image";
import { playerInfo } from "./Player";
type PlayerProps = {
  player: playerInfo;
};
export default function PlayerItem({ player }: PlayerProps) {
  const {
    image,
    nickname,
    name,
    department,
    description,
    position,
    physicalSpec,
    backnumber,
    stat,
    isKorea,
  } = player;
  return (
    <UniSection>
      <UniContainer isKorea={isKorea}>
        <ImageContainer isKorea={isKorea}>
          <Image src={image} alt="player" width={200} height={275}></Image>
        </ImageContainer>
        <TextContainer isKorea={isKorea}>
          <Nickname isKorea={isKorea}>{nickname}</Nickname>
          <NameContainer>
            <h3>{name}</h3>
            <h5>{department}</h5>
          </NameContainer>
          <p>{description}</p>
        </TextContainer>
        <PlayerInfoTable isKorea={isKorea}>
          <tr>
            <th>포지션</th>
            <td>{position}</td>
            <th>신장/체중</th>
            <td>{physicalSpec}</td>
          </tr>
          <tr>
            <th>백넘버</th>
            <td>{backnumber}</td>
            <th>지난 성적</th>
            <td>{stat}</td>
          </tr>
        </PlayerInfoTable>
      </UniContainer>
    </UniSection>
  );
}

const UniSection = styled.section`
  /* clip-path: polygon(0 0, 100% 12%, 100% 100%, 0% 100%); */
  position: relative;
  /* transform-origin: top left; */
`;

const UniContainer = styled.div<{ isKorea: boolean }>`
  height: 45vh;
  min-height: 325px;

  ${(props) =>
    props.isKorea &&
    css`
      background: linear-gradient(
        0deg,
        rgba(18, 18, 18, 0) 0%,
        rgba(243, 35, 60, 0.17) 50%,
        rgba(18, 18, 18, 0) 100%
      );
    `}
  ${(props) =>
    !props.isKorea &&
    css`
      background: linear-gradient(
        0deg,
        rgba(18, 18, 18, 0) 0%,
        rgba(41, 72, 255, 0.17) 50%,
        rgba(18, 18, 18, 0) 100%
      );
    `}
`;

const ImageContainer = styled.div<{ isKorea: boolean }>`
  position: absolute;
  ${(props) =>
    props.isKorea &&
    css`
      top: 0%;
      left: 0%;
    `}
  ${(props) =>
    !props.isKorea &&
    css`
      bottom: 0%;
      right: 0%;
    `};
`;

const TextContainer = styled.div<{ isKorea: boolean }>`
  position: absolute;
  color: white;
  display: flex;
  flex-direction: column;
  ${(props) =>
    props.isKorea &&
    css`
      top: 20%;
      left: 40%;
    `}
  ${(props) =>
    !props.isKorea &&
    css`
      bottom: 40%;
      right: 45%;
      align-items: flex-end;
      text-align: end;
    `};
`;

const Nickname = styled.h5<{ isKorea: boolean }>`
  width: 75px;
  height: 21px;
  color: #fff;
  font-size: 14px;
  font-family: "Spoqa Han Sans Neo";
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.84px;
  text-align: center;
  ${(props) =>
    props.isKorea &&
    css`
      background: var(
        --grad-red-2,
        linear-gradient(90deg, #f3233c 0%, rgba(243, 35, 60, 0.25) 100%)
      );
      text-shadow: 0px 4px 4px 0px gray;
    `}
  ${(props) =>
    !props.isKorea &&
    css`
      background: var(
        --grad-blue-2,
        linear-gradient(90deg, rgba(41, 72, 255, 0.25) 0%, #2948ff 100%)
      );
    `};
`;
const NameContainer = styled.div`
  display: flex;
  align-items: baseline;
`;
const PlayerInfoTable = styled.table<{ isKorea: boolean }>`
  position: absolute;
  color: white;
  & th {
    font-size: 9px;
    font-family: Spoqa Han Sans Neo;
    font-weight: 700;
    padding-left: 20px;
  }
  & td {
    font-size: 14px;
    font-family: Spoqa Han Sans Neo;
    font-weight: 500;
    padding-left: 6px;
  }
  ${(props) =>
    props.isKorea &&
    css`
      bottom: 20%;
      left: 43%;
      & th {
        color: #f95b6e;
      }
    `}
  ${(props) =>
    !props.isKorea &&
    css`
      bottom: 10%;
      right: 45%;
      & th {
        color: #5b84ff;
      }
    `};
`;
