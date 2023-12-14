'use client';

import { Player, getRankingTopPlayers } from '@/player/domain/Player';
import { Header } from '../../molecules/HeaderWithBackIcon';
import { SearchPlayerInput } from '../../molecules/SearchPlayerInput';
import { FadeInContainer } from '../../ui/FadeInContainer';
import { MainContainer } from '../../ui/MainContainer';
import clsx from 'clsx';

export const TopPlayers = ({ players }: { players: Player[] }) => {
  const topPlayers = getRankingTopPlayers(players);
  const onChange = (input: string) => {
    console.log(input);
  };

  return (
    <MainContainer className="px-4">
      <FadeInContainer>
        <div className="flex flex-col gap-6">
          <Header label={'Top Players'} />
          <SearchPlayerInput onChange={onChange} placeholder="Search Players" />
        </div>
      </FadeInContainer>

      <FadeInContainer>
        <div className="mt-6 rounded-2xl bg-white">
          {topPlayers.map((player, i) => {
            const isLast = i === players.length - 1;
            return <TopPlayer key={player.id} player={player} isLast={isLast} />;
          })}
        </div>
      </FadeInContainer>
    </MainContainer>
  );
};

export const TopPlayer = ({ player, isLast }: { player: Player; isLast: boolean }) => {
  return (
    <div
      className={clsx('flex items-center justify-between p-4', {
        'border-b-[0.5px]': !isLast,
      })}
    >
      <div className="flex items-center justify-between">
        <div>{/* avatar */}</div>
        <p className="font-medium">{player.username}</p>
      </div>
      <p className="text-sm">
        <span>{player.matchesWon}</span>
        <span className="text-xs pl-[1px]">W</span>
        <span>{` / `}</span>
        <span className="text-red-600">{player.matchesLost}</span>
        <span className="text-red-600 text-xs pl-[1px]">L</span>
      </p>
    </div>
  );
};
