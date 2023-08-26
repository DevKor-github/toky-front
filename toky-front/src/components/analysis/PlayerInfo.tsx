import Link from "next/link";
import { styled } from "styled-components";
import Arrow from "../../../public/image/MainArrow.svg";
import Image from "next/image";
import testPlayer from "../../../public/image/playerTest.png";
// link href 수정하기
import { PLAYER } from "./Data";
import { MatchProps } from "./MatchType";

export default function PlayerInfo({ match }: MatchProps) {
  let matchPlayer = PLAYER[match];
  const map = [
    "/image/baseball_main_player.svg",
    "/image/icehockey_main_player.svg",
    "/image/basketball_main_player.svg",
    "/image/rugby_main_player.svg",
    "/image/football_main_player.svg",
  ];
  return (
    <Wrapper>
      <PlayerInfoWrapper>
        <PlayerImageWrapper>
          <Image
            src={map[match]}
            alt="player image"
            fill
            priority
            sizes="(max-width: 480px) 100vw, (max-width: 480px) 100vw, (max-width: 480px) 100vw"
            style={{ objectFit: "contain", width: "100%" }}
          />
        </PlayerImageWrapper>
        {/* {matchPlayer.map((player, i) => {
          return (
            <>
              <PlayerItem key={i} player={player} />
              {i % 2 == 0 && <Diagonal />}
            </>
          );
        })} */}
      </PlayerInfoWrapper>
      {/* 더 알아보기 버튼 */}
      {/* <MorePlayerWrapper>
        <Link
          href="/analysis-more"
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
      </MorePlayerWrapper> */}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  /* min-width: 390px; */
  padding-top: 20px;
  background-color: #121212;
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
const PlayerImageWrapper = styled.div`
  position: relative;
  min-height: 585px;
  height: 665px;
  width: 100%;
`;
