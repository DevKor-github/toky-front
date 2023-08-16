import { IPlayer } from "../PlayerList";
import { koreaBaseBallPlayer } from "./KoreaBaseBallData";
import { koreaIceHockeyPlayer } from "./KoreaIceHockeyData";
import { koreaBasketBallPlayer } from "./KoreaBasketBallData";
import { koreaRugbyPlayer } from "./KoreaRugbyData";
import { koreaFootBallPlayer } from "./KoreaFootBallData";

//야구 빙구 농구 럭비 축구 순서

export const koreaPlayer: IPlayer[][] = [
  koreaBaseBallPlayer,
  koreaIceHockeyPlayer,
  koreaBasketBallPlayer,
  koreaRugbyPlayer,
  koreaFootBallPlayer,
];
