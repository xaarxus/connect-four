import { Board, WinResult } from '../types';
import { BOARD_SIZE } from '../consts/boardSize';
import inBounds from './inBounds'

const { ROWS, COLS } = BOARD_SIZE;

const checkWinner = (board: Board): WinResult => {
  const directions: Array<[number, number]> = [[0, 1], [1, 0], [1, 1], [-1, 1], ];

  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      const cell = board[r][c];
      if (!cell) continue;

      for (const [dr, dc] of directions) {
        const line: Array<[number, number]> = [[r, c]];
        for (let k = 1; k < 4; k++) {
          const nr = r + dr * k;
          const nc = c + dc * k;
          if (!inBounds(nr, nc) || board[nr][nc] !== cell) break;
          line.push([nr, nc]);
        }
        if (line.length === 4) return { winner: cell, line };
      }
    }
  }

  return { winner: null };
};

export default checkWinner;