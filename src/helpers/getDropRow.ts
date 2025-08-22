import { Board } from '../types';
import { BOARD_SIZE } from '../consts/boardSize';

const { ROWS } = BOARD_SIZE;

const getDropRow = (board: Board, col: number): number | null => {
  for (let r = ROWS - 1; r >= 0; r--) {
    if (board[r][col] === null) return r;
  }
  return null;
};

export default getDropRow;