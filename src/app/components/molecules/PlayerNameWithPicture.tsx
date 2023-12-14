import Plus from '@public/plus.svg';
import Image from 'next/image';

type Props = {
  playerName?: string;
  playerAvatar?: string;
  onClick?: () => void;
};

export const PlayerNameWithPicture = ({ playerName, playerAvatar, onClick }: Props) => {
  return (
    <button className="flex flex-col justify-center items-center gap-4" onClick={onClick}>
      <span className="text-black">{playerName}</span>
      <div className="border-[3px] border-black w-[108px] h-[108px] rounded-full bg-white flex justify-center items-center">
        {/* {playerAvatar ? (
          <Image src={playerAvatar} alt="player avatar" width={108} height={108} />
        ) : ( */}
        <Image src={Plus} alt="add" width={36} height={36} />
        {/* )} */}
      </div>
    </button>
  );
};
