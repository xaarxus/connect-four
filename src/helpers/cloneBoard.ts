import { Board } from '../types';

const cloneBoard = (board: Board): Board => board.map((row) => row.slice());

export default cloneBoard;