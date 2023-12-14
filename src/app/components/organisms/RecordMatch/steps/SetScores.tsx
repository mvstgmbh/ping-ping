import { MatchDTO } from '@api/match/route';
import { PrimaryButton } from '@atoms/index';
import { HeaderWithBackIcon } from '@molecules/HeaderWithBackIcon';
import { PlayerNameWithPicture } from '@molecules/PlayerNameWithPicture';
import { Player } from '@prisma/client';
import { apiService } from '@shared/infra/apiService';
import { useState } from 'react';

type Props = {
  onBack: () => void;
  playerOne?: Player;
  playerTwo?: Player;
  reset: () => void;
};
export const SetScores = ({ onBack, playerOne, playerTwo, reset }: Props) => {
  const [playerOneScore, setPlayerOneScore] = useState<number>(0);
  const [playerTwoScore, setPlayerTwoScore] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const setMatchScore = async () => {
    setIsLoading(true);
    const matchObj: MatchDTO = {
      playerAId: playerOne?.id as number,
      playerBId: playerTwo?.id as number,
      scorePlayerA: playerOneScore,
      scorePlayerB: playerTwoScore,
    };

    try {
      await apiService.post('/match', matchObj);
      setIsLoading(false);
      reset();
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <div className="h-full ">
      <HeaderWithBackIcon label={'Final Score'} onClickBack={onBack} />
      <div className="p-4 h-full flex flex-col justify-evenly">
        <span>
          When you add the match score, the other player must confirm or call bullshit, or it will
          be approved after 24 hours.
        </span>
        <div className="flex flex-col gap-4">
          <div className="bg-[#FFFFFFA6] p-4 rounded-2xl justify-between flex flex-row">
            <PlayerNameWithPicture
              playerAvatar={playerOne?.avatar}
              playerName={playerOne?.username || 'Player 2'}
              inColumn={false}
              imageSize={48}
            />
            <input
              className="w-[100px] rounded-2xl border border-[#CFCFCF] text-center font-bold"
              type="number"
              onChange={(e) => {
                setPlayerOneScore(parseInt(e.target.value));
              }}
            />
          </div>
          <div className="bg-[#FFFFFFA6] p-4 rounded-2xl justify-between flex flex-row">
            <PlayerNameWithPicture
              playerAvatar={playerTwo?.avatar}
              playerName={playerTwo?.username || 'Player 2'}
              inColumn={false}
              imageSize={48}
            />
            <input
              className="w-[100px] rounded-2xl border border-[#CFCFCF] text-center font-bold"
              type="number"
              onChange={(e) => {
                setPlayerTwoScore(parseInt(e.target.value));
              }}
            />
          </div>
        </div>
        <PrimaryButton label={'Add Score'} onClick={setMatchScore} isLoading={isLoading} />
      </div>
    </div>
  );
};
