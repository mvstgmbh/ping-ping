import { NavbarItem } from '@atoms/NavbarItem';
import RankingSelected from '@public/ranking-selected.svg';
import Ranking from '@public/ranking.svg';
import RecordSelected from '@public/record-selected.svg';
import Record from '@public/record.svg';
import UserSelected from '@public/user-selected.svg';
import User from '@public/user.svg';
import { usePathname, useRouter } from 'next/navigation';

export const Navbar = () => {
  const pathname = usePathname();
  const { push } = useRouter();

  const items = [
    {
      svg: pathname === '/' ? RecordSelected : Record,
      isSelected: pathname === '/',
      path: '/',
      label: 'Record',
    },
    {
      svg: pathname === '/rankings' ? RankingSelected : Ranking,
      isSelected: pathname === '/rankings',
      path: '/rankings',
      label: 'Ranking',
    },
    {
      svg: pathname === '/profile' ? UserSelected : User,
      isSelected: pathname === '/profile',
      path: '/profile',
      label: 'You',
    },
  ];

  const handleClick = (path: string) => {
    console.log({ path });
    push(path);
  };

  return (
    <div
      className="flex flex-row justify-evenly sticky bottom-0 w-full bg-white bg-opacity-60 rounded-t-[24px] border border-[#f3f3f3] drop-shadow-lg"
      style={{ boxShadow: ' 0px -2px 24px 0px rgba(0, 0, 0, 0.1)' }}
    >
      {items.map((item) => {
        return (
          <NavbarItem
            key={item.label}
            svg={item.svg}
            label={item.label}
            isSelected={item.isSelected}
            onClick={() => handleClick(item.path)}
          />
        );
      })}
    </div>
  );
};
