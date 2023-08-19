import { IPlayer } from "../PlayerList";
import { yonseiBaseBallPlayer } from "./YonseiBaseBallData";
import { yonseiIceHockeyPlayer } from "./YonseiIceHockeyData";
import { yonseiBasketBallPlayer } from "./YonseiBasketBallData";
import { yonseiRugbyPlayer } from "./YonseiRugbyData";
import { yonseiFootBallPlayer } from "./YonseiFootBallData";

export const yonseiPlayer: IPlayer[][] = [
  yonseiBaseBallPlayer,
  yonseiIceHockeyPlayer,
  yonseiBasketBallPlayer,
  yonseiRugbyPlayer,
  yonseiFootBallPlayer,
];
