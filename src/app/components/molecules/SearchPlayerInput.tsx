'use client';
import Search from '@public/search.svg';
import Image from 'next/image';

type Props = {
  onChange: (input: string) => void;
  placeholder: string;
};

export const SearchPlayerInput = ({ onChange, placeholder }: Props) => {
  return (
    <div className=" border border-[#CFCFCF] rounded-lg p-2 w-full bg-[#F3F3F3] flex justify-center items-center">
      <input
        className="border-none bg-transparent outline-none text-black"
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        style={{ flex: 1 }}
      />
      <Image src={Search} alt="Search" />
    </div>
  );
};
