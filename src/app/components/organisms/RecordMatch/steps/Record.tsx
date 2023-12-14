import { Steps } from '../RecordMatch';

type Props = {
  onClick: (stepName: Steps) => void;
};

export const Record = ({ onClick }: Props) => {
  return (
    <div className="h-full flex justify-center items-center overflow-hidden">
      <div className="bg-[#f6f8fa] rounded-full min-w-[455px] min-h-[455px] flex justify-center items-center ">
        <button
          onClick={() => onClick(Steps.ChoosePlayers)}
          className="record-button p-10 bg-black h-[191px] w-[191px] flex justify-center items-center rounded-full text-2xl font-semibold"
        >
          Record match
        </button>
      </div>
    </div>
  );
};
