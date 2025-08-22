import { PLAYER_COLORS } from "./consts/playerColors"

export type Player = typeof PLAYER_COLORS[keyof typeof PLAYER_COLORS];
export type Cell = Player | null;
export type Board = Cell[][];
export type WinResult = { winner: Player; line: Array<[number, number]> } | { winner: null };