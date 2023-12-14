import { LoadingSpinner } from '@atoms/LoadingSpinner';
import { PrimaryButton } from '@atoms/index';
import { useGetHeaderAndFooterHeight } from '@hooks/useGetHeaderAndFooterHeight';
import { Header } from '@molecules/HeaderWithBackIcon';
import { PlayerBanner } from '@molecules/PlayerBanner';
import { SearchPlayerInput } from '@molecules/SearchPlayerInput';
import { Player } from '@prisma/client';
import { apiService } from '@shared/infra/apiService';
import { useEffect, useState } from 'react';
import { Steps } from '../RecordMatch';

type Props = {
  handleSelectPlayer: (player: Player) => void;
  onContinue: (step: Steps) => void;
  onBack: () => void;
  playerOne?: Player;
  playerTwo?: Player;
  isPlayerOne?: boolean;
};

export const SearchPlayer = ({
  handleSelectPlayer,
  onContinue,
  onBack,
  isPlayerOne,
  playerOne,
  playerTwo,
}: Props) => {
  const [players, setPlayers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { footerHeight } = useGetHeaderAndFooterHeight();

  const onChange = (input: string) => {
    console.log(input);
  };

  const onSelectPlayer = (player: Player) => {
    handleSelectPlayer(player);
  };

  const handleConfirm = () => {
    onContinue(Steps.ChoosePlayers);
  };

  useEffect(() => {
    setIsLoading(true);
    const getPlayers = async () => {
      const response = await apiService.get('/player');
      setPlayers(response.data);
      setIsLoading(false);
    };

    getPlayers().catch((error) => {
      console.log(error);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="h-full">
      <Header label={isPlayerOne ? 'Player 1' : 'Player 2'} onClickBack={onBack} />
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

          {players?.map((player: any, index) => (
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
