import cloneBoard from './cloneBoard';
import getDropRow from './getDropRow';
import { Board, Player } from '../types';

const placePiece = (board: Board, col: number, player: Player): { board: Board; row: number; col: number } | null => {
  const row = getDropRow(board, col);
  if (row === null) return null;

  const next = cloneBoard(board);
  next[row][col] = player;

  return { board: next, row, col };
};

export default placePiece;