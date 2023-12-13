import ChevronLeft from '@public/chevron-left.svg';
import Image from 'next/image';

type Props = {
  label: string;
  onClickBack: () => void;
};

export const HeaderWithBackIcon = ({ label, onClickBack }: Props) => {
  return (
    <div className="flex flex-row mt-5 sticky top-0">
      <button className="p-2" onClick={onClickBack}>
        <Image src={ChevronLeft} alt={'back'} />
      </button>
      <div className="flex flex-row justify-center items-center w-full">
        <h3 className="text-black text-3xl font-bold">{label}</h3>
      </div>
    </div>
  );
};
