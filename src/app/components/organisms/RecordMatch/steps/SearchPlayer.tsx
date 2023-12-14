import { LoadingSpinner } from '@atoms/LoadingSpinner';
import { PrimaryButton } from '@atoms/index';
import { useGetHeaderAndFooterHeight } from '@hooks/useGetHeaderAndFooterHeight';
import { HeaderWithIcons } from '@/app/components/molecules/HeaderWithIcons';
import { PlayerBanner } from '@molecules/PlayerBanner';
import { SearchPlayerInput } from '@molecules/SearchPlayerInput';

import { apiService } from '@shared/infra/apiService';
import { useEffect, useState } from 'react';
import { Player } from '../../../../../player/domain/Player';
import { Steps } from '../RecordMatch';

type Props = {
  handleSelectPlayer: (player: Player) => void;
  onContinue: (step: Steps) => void;
  onBack: () => void;
  onAddNewPlayer: () => void;
  playerOne?: Player;
  playerTwo?: Player;
  isPlayerOne?: boolean;
  playerList?: Player[];
};

export const SearchPlayer = ({
  handleSelectPlayer,
  onContinue,
  onBack,
  onAddNewPlayer,
  isPlayerOne,
  playerOne,
  playerTwo,
  playerList,
}: Props) => {
  const [players, setPlayers] = useState<Player[]>(playerList || []);

  const [isLoading, setIsLoading] = useState(false);

  const { footerHeight } = useGetHeaderAndFooterHeight();

  const onChange = (input: string) => {
    const filtered = playerList?.filter((player: Player) => {
      const fullName = `${player.username}`;
      return fullName.toLowerCase().includes(input.toLowerCase());
    });
    setPlayers(filtered || []);
  };

  const onSelectPlayer = (player: Player) => {
    handleSelectPlayer(player);
  };

  const handleConfirm = () => {
    onContinue(Steps.ChoosePlayers);
  };

  useEffect(() => {
    const getPlayers = async () => {
      setIsLoading(true);
      const response = await apiService.get('/player');
      setPlayers(response.data);
      setIsLoading(false);
    };

    if (!playerList?.length) {
      getPlayers().catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
    }
  }, []);

  return (
    <div className="h-full">
      <HeaderWithIcons
        label={isPlayerOne ? 'Player 1' : 'Player 2'}
        onClickLeftIcon={onBack}
        onClickRightIcon={onAddNewPlayer}
      />
      <div className={`h-full flex flex-col justify-between p-4 overflow-y-auto`}>
        <div>
          <SearchPlayerInput onChange={onChange} placeholder="Search Players" />
          <div
            className={`flex flex-col mt-4 max-h-full overflow-y-auto border-[#CFCFCF] bg-[#F3F3F3] rounded-2xl`}
          ></div>
          {isLoading && <LoadingSpinner />}
          {!isLoading && !players.length && (
            <div className="flex flex-col items-center justify-center">
              <p className="text-center text-gray-500">No players found</p>
            </div>
          )}

          {players?.map((player: Player, index) => (
            <PlayerBanner
              player={player}
              key={index}
              selectable
              isFirst={index === 0}
              isLast={index === players.length - 1}
              onSelectPlayer={onSelectPlayer}
              disabled={playerOne?.id === player.id || playerTwo?.id === player.id}
            />
          ))}
        </div>

        <div
          className={`w-full`}
          style={{
            marginBottom: footerHeight,
          }}
        >
          <PrimaryButton onClick={handleConfirm} label="Confirm" />
        </div>
      </div>
    </div>
  );
};
