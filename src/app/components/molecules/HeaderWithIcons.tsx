import ChevronLeft from '@public/chevron-left.svg';
import Plus from '@public/plus.svg';
import Image from 'next/image';

type Props = {
  label: string;
  onClickLeftIcon?: () => void;
  onClickRightIcon?: () => void;
};

export const HeaderWithIcons = ({ label, onClickLeftIcon, onClickRightIcon }: Props) => {
  return (
    <div className="flex flex-row mt-5 sticky top-0" id={'header'}>
      {onClickLeftIcon &&
        <button className="p-2" onClick={onClickLeftIcon}>
          <Image src={ChevronLeft} alt={'back'} />
        </button>
      }
      <div className="flex flex-row justify-center items-center w-full">
        <h3 className="text-black text-3xl font-bold">{label}</h3>
      </div>
      {onClickRightIcon &&
        <button className="p-2" onClick={onClickRightIcon}>
          <Image src={Plus} alt={'add'} />
        </button>
      }
    </div>
  );
};
