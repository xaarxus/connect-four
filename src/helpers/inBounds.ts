import { BOARD_SIZE } from '../consts/boardSize';

const { ROWS, COLS } = BOARD_SIZE;

const inBounds = (r: number, c: number)  => r >= 0 && r < ROWS && c >= 0 && c < COLS;

export default inBounds;