import { HeaderWithBackIcon } from '@molecules/HeaderWithBackIcon';
import { PlayerNameWithPicture } from '@molecules/PlayerNameWithPicture';
import { Player } from '@prisma/client';
import { PrimaryButton } from '../../../atoms';
import { Steps } from '../RecordMatch';

type Props = {
  playerOne?: Player;
  playerTwo?: Player;
  onContinue: (step: Steps) => void;
  onBack: () => void;
  hasSelectedBothPlayers: boolean;
};

export const ChoosePlayers = ({
  onContinue,
  onBack,
  playerOne,
  playerTwo,
  hasSelectedBothPlayers,
}: Props) => {
  return (
    <div className="h-full">
      <HeaderWithBackIcon label={'Choose Players'} onClickBack={onBack} />
      <div className="h-full flex flex-col justify-center items-center gap-6">
        <PlayerNameWithPicture
          playerAvatar={playerOne?.avatar}
          playerName={playerOne?.username || 'Player 1'}
          onClick={() => onContinue(Steps.SearchPlayerOne)}
        />
        <PlayerNameWithPicture
          playerAvatar={playerTwo?.avatar}
          playerName={playerTwo?.username || 'Player 2'}
          onClick={() => onContinue(Steps.SearchPlayerTwo)}
        />
        {hasSelectedBothPlayers && (
          <div className="w-full p-4 mt-10">
            <PrimaryButton label={'Set Scores'} onClick={() => onContinue(Steps.SetScores)} />
          </div>
        )}
      </div>
    </div>
  );
};
