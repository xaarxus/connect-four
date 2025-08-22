import React, { useMemo } from 'react';
import Cell from './Cell';
import { Board as BoardType } from '../types';

type Props = {
  board: BoardType;
  onColumnClick: (col: number) => void;
  winningLine?: Array<[number, number]> | null;
  disabled?: boolean;
};

const Board: React.FC<Props> = ({ board, onColumnClick, winningLine = null, disabled = false }) => {
  const winSet = useMemo(() => {
    if (!winningLine) return new Set<string>();
    return new Set(winningLine.map(([r, c]) => `${r}-${c}`));
  }, [winningLine]);

  return (
    <div className="board">
      {board.map((row, r) =>
        row.map((_cell, c) => (
          <Cell
            key={`${r}-${c}`}
            value={board[r][c]}
            isWinning={winSet.has(`${r}-${c}`)}
            onClick={!disabled ? () => onColumnClick(c) : undefined}
            ariaLabel={`column ${c + 1}`}
          />
        ))
      )}
    </div>
  );
};

export default Board;