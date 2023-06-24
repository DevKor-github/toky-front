import Link from "next/link";
import { styled, css } from "styled-components";
import Arrow from "../../../public/image/MainArrow.svg";
import Image from "next/image";
import PlayerImage from "../../../public/image/Logo.webp";
// link href 수정하기

interface playerInfo {
  nickname: string;
  name: string;
  department: string;
  description: string;
  position: string;
  physicalSpec: string;
  backnumber: number;
  stat: string;
  isKorea: boolean;
}

let players: playerInfo[] = [
  {
    nickname: "고대 슛돌이",
    name: "아야어",
    department: "체육교육학과21",
    description: "두줄소개 어쩌구 슛에서 파생된 돌파 역시 매력적인 공격 옵션",

    position: "FW",
    physicalSpec: "178/70",
    backnumber: 8,
    stat: "2골 3도움",
    isKorea: true,
  },
  {
    nickname: "연대 슛돌이",
    name: "아야어",
    department: "체육교육학과21",
    description: "두줄소개 어쩌구 슛에서 파생된 돌파 역시 매력적인 공격 옵션",

    position: "DF",
    physicalSpec: "178/70",
    backnumber: 8,
    stat: "2골 3도움",
    isKorea: false,
  },
];

export default function PlayerInfo() {
  return (
    <Wrapper>
      <PlayerInfoWrapper>
        <UniSection>
          <UniContainer isKorea={true}>
            <ImageContainer isKorea={true}>
              <Image
                src={PlayerImage}
                alt="player"
                width={200}
                height={275}
              ></Image>
            </ImageContainer>
            <TextContainer isKorea={true}>
              <Nickname isKorea={true}>고대 슛돌이</Nickname>
              <NameContainer>
                <h3>김기현</h3>
                <h5>체육교육학과 21</h5>
              </NameContainer>
              <p>두줄소개 어쩌구 슛에서 파생된 돌파 역시 매력적인 공격 옵션</p>
            </TextContainer>
            <PlayerInfoTable isKorea={true}>
              <tr>
                <th>포지션</th>
                <td>FW</td>
                <th>신장/체중</th>
                <td>178/70</td>
              </tr>
              <tr>
                <th>백넘버</th>
                <td>8</td>
                <th>지난 성적</th>
                <td>2골 3도움</td>
              </tr>
            </PlayerInfoTable>
          </UniContainer>
        </UniSection>
        <Diagonal />
        <UniSection>
          <UniContainer isKorea={false}>
            <ImageContainer isKorea={false}>
              <Image
                src={PlayerImage}
                alt="player"
                width={200}
                height={275}
              ></Image>
            </ImageContainer>
            <TextContainer isKorea={false}>
              <Nickname isKorea={false}>선수 닉네임</Nickname>
              <NameContainer>
                <h5>체육교육학과 21</h5>

                <h3>김기현</h3>
              </NameContainer>
              <p>두줄소개 어쩌구 슛에서 파생된 돌파 역시 매력적인 공격 옵션</p>
            </TextContainer>
            <PlayerInfoTable isKorea={false}>
              <tr>
                <th>포지션</th>
                <td>FW</td>
                <th>신장/체중</th>
                <td>178/70</td>
              </tr>
              <tr>
                <th>백넘버</th>
                <td>8</td>
                <th>지난 성적</th>
                <td>2골 3도움</td>
              </tr>
            </PlayerInfoTable>
          </UniContainer>
        </UniSection>
      </PlayerInfoWrapper>
      {/* 더 알아보기 버튼 */}
      <MorePlayerWrapper>
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <H4>더 많은 선수 보러가기</H4>
          <Image
            src={Arrow}
            alt="arrow"
            width={7}
            height={12}
            style={{ marginBottom: "2px" }}
          />
        </Link>
      </MorePlayerWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-width: 390px;
`;
const PlayerInfoWrapper = styled.div``;
const MorePlayerWrapper = styled.div`
  padding-top: 10px;
  margin-right: 20px;
  display: flex;
  justify-content: end;
`;
const H4 = styled.h4`
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.06em;
  color: #ffffff;
`;
const Diagonal = styled.div`
  width: 100%;
  height: 2px;
  transform: rotate(5deg);
  background: linear-gradient(90deg, #121212, #ffffff, #121212);
`;

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
      left: 45%;
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
      left: 45%;
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
