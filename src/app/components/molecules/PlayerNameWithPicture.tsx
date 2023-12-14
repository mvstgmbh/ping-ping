import Plus from '@public/plus.svg';
import Image from 'next/image';

type Props = {
  playerName?: string;
  playerAvatar?: string;
  onClick?: () => void;
};

export const PlayerNameWithPicture = ({ playerName, playerAvatar, onClick }: Props) => {
  console.log({ playerAvatar });
  return (
    <button className="flex flex-col justify-center items-center gap-4" onClick={onClick}>
      <span className="text-black">{playerName}</span>
      <div className="border-[3px] border-black w-[108px] h-[108px] rounded-full bg-white flex justify-center items-center">
        <Image
          src={Plus}
          alt="player avatar"
          width={playerAvatar ? 108 : 36}
          height={playerAvatar ? 108 : 36}
        />
      </div>
    </button>
  );
};
