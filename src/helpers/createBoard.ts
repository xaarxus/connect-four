import { Board, Cell } from '../types';
import { BOARD_SIZE } from '../consts/boardSize';

const { ROWS, COLS } = BOARD_SIZE;

const createBoard = (): Board => Array.from({ length: ROWS }, () => Array<Cell>(COLS).fill(null));

export default createBoard;