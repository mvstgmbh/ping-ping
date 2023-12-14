import { Player } from '@/player/domain/Player';
import { clsx } from 'clsx';

export const TopPlayer = ({ player, isLast }: { player: Player; isLast: boolean }) => {
  return (
    <div
      className={clsx('flex items-center justify-between p-4', {
        'border-b-[0.5px]': !isLast,
      })}
    >
      <div className="flex items-center justify-between">
        <div>{/* avatar */}</div>
        <p className="font-medium">{player.username}</p>
      </div>
      <p className="text-sm">
        <span>{player.matchesWon}</span>
        <span className="text-xs pl-[1px]">W</span>
        <span>{` / `}</span>
        <span className="text-red-600">{player.matchesLost}</span>
        <span className="text-red-600 text-xs pl-[1px]">L</span>
      </p>
    </div>
  );
};
