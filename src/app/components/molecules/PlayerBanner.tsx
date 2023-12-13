import { Player } from '@prisma/client';

type Props = {
  selectable?: boolean;
  isFirst?: boolean;
  isLast?: boolean;
  player: Player;
};

export const PlayerBanner = ({ player, selectable, isFirst, isLast }: Props) => {
  return (
    <div
      className={`flex p-2 justify-between items-center border-b border-[#CFCFCF] bg-[#F3F3F3] ${
        isFirst && 'rounded-t-2xl '
      }
      ${isLast && ' border-none rounded-b-2xl '}`}
    >
      <div className="flex items-center gap-4">
        <div className="w-8 h-8 rounded-full bg-[#D9D9D9]" />
        <span className="text-black">{player?.username}</span>
      </div>

      <div>
        {selectable ? (
          <div className="inline-flex items-center">
            <label className="relative flex items-center p-3 rounded-full cursor-pointer">
              <input
                name="player"
                type="radio"
                className="before:content[''] peer relative h-8 w-8 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                onChange={(e) => console.log(e.target.checked)}
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
          <span>rating</span>
        )}
      </div>
    </div>
  );
};
