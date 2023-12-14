import { FC } from 'react';

interface Props {
  text: string;
  number: number;
}

export const InfoCard: FC<Props> = ({ text, number }) => {
  return (
    <div className="p-4 bg-white rounded-2xl flex flex-col items-center justify-center gap-4">
      <p className="text-3xl font-bold">{number}</p>
      <p className="text-sm opacity-50 text-center">{text}</p>
    </div>
  );
};
