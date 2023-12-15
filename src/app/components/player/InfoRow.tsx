import { FC } from 'react';

interface Props {
  text: string;
  value: string;
}

export const InfoRow: FC<Props> = ({ text, value }) => {
  return (
    <div className="p-4 bg-white rounded-2xl flex items-center justify-between">
      <p className="opacity-50 text-black">{text}</p>
      <p className="text-lg font-bold text-black">{value}</p>
    </div>
  );
};
