'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Player } from '../../../../player/domain/Player';
import { apiService } from '../../../../shared/infra/apiService';
import { Routes } from '../../../enums/routes.enums';
import { HeaderWithIcons } from '../../molecules/HeaderWithIcons';
import { PlayerBanner } from '../../molecules/PlayerBanner';
import { SearchPlayerInput } from '../../molecules/SearchPlayerInput';
import { FadeInContainer } from '../../ui/FadeInContainer';
import { MainContainer } from '../../ui/MainContainer';

export const Streaks = ({ players: playerList }: { players?: Player[] }) => {
  const [players, setPlayers] = useState<Player[]>(playerList || []);
  const { push } = useRouter();

  const onChange = (input: string) => {
    const filtered = playerList?.filter((player: Player) => {
      const fullName = `${player.username}`;
      return fullName.toLowerCase().includes(input.toLowerCase());
    });
    setPlayers(filtered || []);
  };

  useEffect(() => {
    const getPlayers = async () => {
      const response = await apiService.get('/player');
      setPlayers(response.data);
    };

    if (!playerList?.length) {
      getPlayers().catch((error) => {
        console.log(error);
      });
    }
  }, []);

  const handlePlayerClick = (player: Player) => {
    push(Routes.players + `/${player.id}`);
  };

  return (
    <MainContainer className="px-4">
      <FadeInContainer>
        <div className="flex flex-col gap-6">
          <HeaderWithIcons label={'Streaks'} />
          <SearchPlayerInput onChange={onChange} placeholder="Search Players" />
        </div>
      </FadeInContainer>

      <FadeInContainer>
        <div className={`h-full flex flex-col justify-between overflow-y-auto`}>
          <div
            className={`flex flex-col mt-4 max-h-full overflow-y-auto border-[#CFCFCF] bg-[#F3F3F3] rounded-2xl`}
          ></div>

          {players?.map((player: Player, index) => (
            <PlayerBanner
              player={player}
              key={index}
              isFirst={index === 0}
              isLast={index === players.length - 1}
              onSelectPlayer={handlePlayerClick}
            />
          ))}
        </div>
      </FadeInContainer>
    </MainContainer>
  );
};
