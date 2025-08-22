import { Board } from '../types';

const isDraw = (board: Board): boolean => board[0].every((cell) => cell !== null);

export default isDraw;