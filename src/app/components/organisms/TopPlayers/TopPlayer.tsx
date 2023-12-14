import { Player } from '@/player/domain/Player';
import { clsx } from 'clsx';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Routes } from '../../../enums/routes.enums';
import { useGetAvatars } from '../../../hooks/useGetAvatars';

export const TopPlayer = ({ player, isLast }: { player: Player; isLast: boolean }) => {
  const avatars = useGetAvatars();

  const selectedAvatar = avatars[player.avatar]?.path || avatars.avatar1.path;

  const { push } = useRouter();

  const handleClick = () => {
    push(Routes.players + '/' + player.id);
  };
  return (
    <div
      className={clsx('flex items-center justify-between p-4', {
        'border-b-[0.5px]': !isLast,
      })}
      onClick={handleClick}
    >
      <div className="flex items-center justify-between gap-4">
        <div className="w-8 h-8 rounded-full bg-[#D9D9D9]">
          <Image src={selectedAvatar} alt="player avatar" width={32} height={32} />
        </div>
        <p className="font-medium text-black">{player.username}</p>
      </div>
      <p className="text-sm text-black">
        <span>{player.matchesWon}</span>
        <span className="text-xs pl-[1px] text-black">W / </span>
        <span className="text-red-600">{player.matchesLost}</span>
        <span className="text-red-600 text-xs pl-[1px]">L</span>
      </p>
    </div>
  );
};
