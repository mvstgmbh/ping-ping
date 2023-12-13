import Plus from '@public/plus.svg';
import Image from 'next/image';

type Props = {
  playerNumber?: number;
  playerName?: string;
  playerAvatar?: string;
  onClick?: () => void;
};

export const PlayerNameWithPicture = ({
  playerNumber,
  playerName,
  playerAvatar,
  onClick,
}: Props) => {
  return (
    <button className="flex flex-col justify-center items-center gap-4" onClick={onClick}>
      <span className="text-black">{playerName || playerNumber}</span>
      <div className="border-[3px] border-black w-[108px] h-[108px] rounded-full bg-white flex justify-center items-center">
        <Image src={playerAvatar || Plus} alt="player avatar" />
      </div>
    </button>
  );
};
