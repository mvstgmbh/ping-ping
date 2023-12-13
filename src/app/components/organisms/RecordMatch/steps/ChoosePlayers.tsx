import { HeaderWithBackIcon } from '@molecules/HeaderWithBackIcon';
import { PlayerNameWithPicture } from '../../../molecules/PlayerNameWithPicture';
import { ChoosePlayerProps, Steps } from '../RecordMatch';

type Props = {
  playerOne?: ChoosePlayerProps;
  playerTwo?: ChoosePlayerProps;
  onContinue: (step: Steps) => void;
  onBack: () => void;
};

export const ChoosePlayers = ({ onContinue, onBack, playerOne, playerTwo }: Props) => {
  return (
    <div className="h-full">
      <HeaderWithBackIcon label={'Choose Players'} onClickBack={onBack} />
      <div className="h-full flex flex-col justify-center items-center gap-6">
        <PlayerNameWithPicture
          playerAvatar={playerOne?.playerAvatar}
          playerName={playerOne?.playerName || 'Player 1'}
          playerNumber={playerOne?.playerNumber}
          onClick={() => onContinue(Steps.SearchPlayerOne)}
        />
        <PlayerNameWithPicture
          playerAvatar={playerTwo?.playerAvatar}
          playerName={playerTwo?.playerName || 'Player 2'}
          playerNumber={playerTwo?.playerNumber}
          onClick={() => onContinue(Steps.SearchPlayerTwo)}
        />
      </div>
    </div>
  );
};
