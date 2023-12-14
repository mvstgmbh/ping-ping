import Image from 'next/image';
import { Player } from '../../../player/domain/Player';
import { useGetAvatars } from '../../hooks/useGetAvatars';

type Props = {
  selectable?: boolean;
  isFirst?: boolean;
  isLast?: boolean;
  player: Player;
  onSelectPlayer: (player: Player) => void;
  disabled?: boolean;
};

export const PlayerBanner = ({
  player,
  selectable,
  isFirst,
  isLast,
  onSelectPlayer,
  disabled,
}: Props) => {
  const avatars = useGetAvatars();

  const playerAvatar = avatars[player.avatar]?.path || avatars.avatar1.path;

  return (
    <div
      className={`flex p-4 justify-between items-center border-b border-[#CFCFCF] bg-[#F3F3F3] ${
        isFirst && 'rounded-t-2xl '
      }
      ${isLast && ' border-none rounded-b-2xl '}`}
      onClick={() => onSelectPlayer(player)}
    >
      <div className="flex items-center gap-4">
        <div className="w-8 h-8 rounded-full bg-[#D9D9D9]">
          <Image src={playerAvatar} alt="player avatar" width={32} height={32} />
        </div>
        <span className="text-black font-medium">{player?.username}</span>
      </div>

      <div>
        {selectable ? (
          <div className="inline-flex items-center">
            <label className="relative flex items-center rounded-full cursor-pointer">
              <input
                name="player"
                type="radio"
                disabled={disabled}
                className="before:content[''] peer relative h-8 w-8 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                onChange={(e) => {
                  if (e.target.checked) {
                    onSelectPlayer(player);
                  }
                }}
              />
              <span className="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                >
                  <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                </svg>
              </span>
            </label>
          </div>
        ) : (
          <span className="text-sm text-black font-normal">{player.winStreak} games</span>
        )}
      </div>
    </div>
  );
};
