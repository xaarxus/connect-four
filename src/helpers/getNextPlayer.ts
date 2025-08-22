import { PLAYER_COLORS } from "../consts/playerColors";
import { Player } from "../types";

const getNextPlayer = (player: Player): Player => player === PLAYER_COLORS.black
  ? PLAYER_COLORS.red
  : PLAYER_COLORS.black;

export default getNextPlayer;