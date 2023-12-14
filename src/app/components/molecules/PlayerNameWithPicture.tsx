import Plus from '@public/plus.svg';
import Image from 'next/image';

type Props = {
  playerName?: string;
  playerAvatar?: string;
  onClick?: () => void;
  imageSize?: number;
  inColumn?: boolean;
  disabled?: boolean;
};

export const PlayerNameWithPicture = ({
  playerName,
  playerAvatar,
  onClick,
  imageSize,
  inColumn = true,
  disabled,
}: Props) => {
  return (
    <button
      className={`flex ${
        inColumn ? 'flex-col' : 'flex-row-reverse'
      } justify-center items-center gap-4`}
      onClick={onClick}
      disabled={disabled}
    >
      <span className="text-black">{playerName}</span>
      <div
        className={`border-[3px] border-black rounded-full bg-white flex justify-center items-center`}
        style={{
          width: imageSize || 108,
          height: imageSize || 108,
        }}
      >
        {/* {playerAvatar ? (
          <Image src={playerAvatar} alt="player avatar" width={108} height={108} />
        ) : ( */}
        <Image src={Plus} alt="add" width={36} height={36} />
        {/* )} */}
      </div>
    </button>
  );
};
