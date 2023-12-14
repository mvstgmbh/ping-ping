'use client';

import { Player, getRankingTopPlayers } from '@/player/domain/Player';
import { Header } from '../../molecules/HeaderWithBackIcon';
import { SearchPlayerInput } from '../../molecules/SearchPlayerInput';
import { FadeInContainer } from '../../ui/FadeInContainer';
import { MainContainer } from '../../ui/MainContainer';
import { TopPlayer } from './TopPlayer';
import { useState } from 'react';

export const TopPlayers = ({ players }: { players: Player[] }) => {
  const topPlayers = getRankingTopPlayers(players);
  const [filteredPlayers, setFilteredPlayers] = useState<Player[]>(topPlayers || []);
  const onChange = (input: string) => {
    const filtered = topPlayers?.filter((player: Player) => {
      const fullName = `${player.username}`;
      return fullName.toLowerCase().includes(input.toLowerCase());
    });
    setFilteredPlayers(filtered || []);
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
          {filteredPlayers.map((player, i) => {
            const isLast = i === players.length - 1;
            return <TopPlayer key={player.id} player={player} isLast={isLast} />;
          })}
        </div>
      </FadeInContainer>
    </MainContainer>
  );
};
