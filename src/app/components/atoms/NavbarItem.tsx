import Image from 'next/image';

type Props = {
  svg: string;
  label: string;
  isSelected?: boolean;
  onClick?: () => void;
};

export const NavbarItem = ({ svg, label, isSelected, onClick }: Props) => {
  return (
    <button className="flex flex-col items-center p-2 justify-between" onClick={onClick}>
      <Image src={svg} alt={'ping'} />
      <span className={`text-sm mt-2 ${isSelected ? 'text-black' : 'text-[#abaaaa]'}`}>
        {label}
      </span>
    </button>
  );
};
