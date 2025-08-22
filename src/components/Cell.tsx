import React from 'react';
import { Player } from '../types';
import { PLAYER_COLORS } from '../consts/playerColors';

type Props = {
  value: Player | null;
  isWinning?: boolean;
  onClick?: () => void;
  ariaLabel?: string;
};

const Cell: React.FC<Props> = ({ value, isWinning = false, onClick, ariaLabel }) => {
  const colorClass = value === PLAYER_COLORS.black ? 'disc black'
    : value === PLAYER_COLORS.red ? 'disc red'
      : 'disc empty';
  const winClass = isWinning ? ' win' : '';
  return (
    <button
      className={`cell${winClass}`}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      <div className={colorClass} />
    </button>
  );
};

export default Cell;