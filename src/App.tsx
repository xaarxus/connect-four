import './App.css';
import React, { useState } from 'react';
import Board from './components/Board';
import { Board as BoardType, Player, WinResult } from './types';
import { PLAYER_COLORS } from './consts/playerColors';
import { checkWinner, createBoard, placePiece, isDraw, getNextPlayer } from './helpers';

type GameState = {
  board: BoardType;
  current: Player;
  winner: Player | null;
  winningLine: Array<[number, number]> | null;
  draw: boolean;
};

const App = () => {
  const [state, setState] = useState<GameState>({
    board: createBoard(),
    current: PLAYER_COLORS.black,
    winner: null,
    winningLine: null,
    draw: false,
  });

  const handleColumnClick = (col: number) => {
    if (state.winner || state.draw) return;

    const placed = placePiece(state.board, col, state.current);
    if (!placed) return; // колонка полная

    const winnerCheck: WinResult = checkWinner(placed.board);
    if (winnerCheck.winner) {
      setState({
        board: placed.board,
        current: state.current,
        winner: winnerCheck.winner,
        winningLine: 'line' in winnerCheck ? winnerCheck.line : null,
        draw: false,
      });
      return;
    }

    const drawNow = isDraw(placed.board);
    setState({
      board: placed.board,
      current: getNextPlayer(state.current),
      winner: null,
      winningLine: null,
      draw: drawNow,
    });
  };

  const restart = () => {
    setState({
      board: createBoard(),
      current: PLAYER_COLORS.black, // Black always first
      winner: null,
      winningLine: null,
      draw: false,
    });
  };

  const status = state.winner
    ? `${state.winner} WINS!`
    : state.draw
    ? 'DRAW'
    : `Turn: ${state.current}`;

  return (
    <div className="app">
      <h1>Connect Four</h1>

      <div className="desc">
        <span className="dot black" /> BLACK starts  -- <span className="dot red" />RED second
      </div>
      <br />

      <div className="toolbar">
        <div className={`status ${state.winner ? 'win' : state.draw ? 'draw' : ''}`}>
          {status}
        </div>
        <button className="restart" onClick={restart}>Restart</button>
      </div>

      <Board
        board={state.board}
        onColumnClick={handleColumnClick}
        winningLine={state.winningLine}
        disabled={Boolean(state.winner)}
      />
    </div>
  );
}

export default App;