import { AvatarItem } from '@/app/components/atoms/AvatarItem';
import Image from 'next/image';
import ChevronLeft from '@public/chevron-left.svg';
import Avatar1 from '@public/avatar1.svg';
import Avatar2 from '@public/avatar2.svg';
import Avatar3 from '@public/avatar3.svg';
import Avatar4 from '@public/avatar4.svg';
import Avatar5 from '@public/avatar5.svg';
import Avatar6 from '@public/avatar6.svg';
import Avatar7 from '@public/avatar7.svg';
import Avatar8 from '@public/avatar8.svg';
import Avatar9 from '@public/avatar9.svg';
import Avatar10 from '@public/avatar10.svg';
import Avatar11 from '@public/avatar11.svg';
import Avatar12 from '@public/avatar12.svg';
import { useState } from 'react';

export const ChooseAvatar = () => {
  const items = [{ id: 1, svg: Avatar1 }, { id: 2, svg: Avatar2 }, { id: 3, svg: Avatar3 }, { id: 4, svg: Avatar4 }, { id: 5, svg: Avatar5 }, { id: 6, svg: Avatar6 }, { id: 7, svg: Avatar7 }, { id: 8, svg: Avatar8 }, { id: 9, svg: Avatar9 }, { id: 10, svg: Avatar10 }, { id: 11, svg: Avatar11 }, { id: 12, svg: Avatar12 }];

  const [itemSelected, setItemSelected] = useState(Avatar1);

  const handleAvatarClick = (event: any) => {
    setItemSelected(event.target.src);
    console.log({ itemSelected })
  }

  return (
    <div className="flex flex-col justify-between items-center h-full">
      <button className="absolute top-0 left-0 pt-7 pl-6">
        <Image src={ChevronLeft} alt={'chevron-left'} />
      </button>
      <h1 className="text-[#0D0D0D] text-center text-3xl font-bold max-w-[70%]">Choose your avatar</h1>
      <div className='grid grid-cols-3 gap-8'>
        {items.map((item) => {
          return (
            <div key={item.id} onClick={handleAvatarClick}>
              <AvatarItem svg={item.svg} itemSelected={itemSelected} />
            </div>
          );
        })}
      </div>
      <button type="submit" className="bg-[#0D0D0D] text-white font-bold py-[12px] px-[24px] border border-[#243c5a] rounded-2xl w-full">Let's Ping</button>
    </div>
  );
};
