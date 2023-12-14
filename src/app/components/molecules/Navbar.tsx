'use client';
import { NavbarItem } from '@atoms/NavbarItem';
import RankingSelected from '@public/ranking-selected.svg';
import Ranking from '@public/ranking.svg';
import RecordSelected from '@public/record-selected.svg';
import Record from '@public/record.svg';
import RocketSelected from '@public/rocket-launch-selected.svg';
import Rocket from '@public/rocket-launch.svg';
import { usePathname, useRouter } from 'next/navigation';

export const Navbar = () => {
  const pathname = usePathname();
  const { push } = useRouter();

  const items = [
    {
      svg: pathname === '/record' ? RecordSelected : Record,
      isSelected: pathname === '/record',
      path: '/record',
      label: 'Record',
    },
    {
      svg: pathname === '/top-players' ? RankingSelected : Ranking,
      isSelected: pathname === '/top-players',
      path: '/top-players',
      label: 'Top Players',
    },
    {
      svg: pathname === '/streaks' ? RocketSelected : Rocket,
      isSelected: pathname === '/streaks',
      path: '/streaks',
      label: 'Win Streaks',
    },
  ];

  const handleClick = (path: string) => {
    push(path);
  };

  return (
    <div
      id={'navbar'}
      className="flex flex-row justify-evenly w-full bg-white bg-opacity-60 rounded-t-[24px] border border-[#f3f3f3] drop-shadow-lg sticky bottom-0 left-0 z-10"
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
