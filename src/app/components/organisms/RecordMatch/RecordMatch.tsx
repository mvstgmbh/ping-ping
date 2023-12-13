import { useState } from 'react';
import { ChoosePlayers } from './steps/ChoosePlayers';
import { Record } from './steps/Record';
import { SearchPlayer } from './steps/SearchPlayer';
import { SetScores } from './steps/SetScores';

export type ChoosePlayerProps = {
  playerNumber?: number;
  playerName?: string;
  playerAvatar?: string;
};

export enum Steps {
  Record = 'record',
  ChoosePlayers = 'choosePlayers',
  SearchPlayerOne = 'searchPlayerOne',
  SearchPlayerTwo = 'searchPlayerTwo',
  SetScores = 'setScores',
}

export const RecordMatch = () => {
  const [currentStep, setCurrentStep] = useState(Steps.Record);

  const [previousStep, setPreviousStep] = useState<Steps>();
  const [playerOne, setPlayerOne] = useState<ChoosePlayerProps>();
  const [playerTwo, setPlayerTwo] = useState<ChoosePlayerProps>();

  const handleNextStep = (stepName: Steps) => {
    setCurrentStep(stepName);
    setPreviousStep(currentStep);
  };

  const handleBackStep = () => {
    setCurrentStep(previousStep || Steps.Record);
  };

  const handleSelectPlayer = (player: ChoosePlayerProps) => {
    if (currentStep === Steps.SearchPlayerOne) {
      setPlayerOne(player);
    } else {
      setPlayerTwo(player);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case Steps.Record:
        return <Record onClick={() => handleNextStep(Steps.ChoosePlayers)} />;
      case Steps.ChoosePlayers:
        return (
          <ChoosePlayers
            onContinue={handleNextStep}
            onBack={handleBackStep}
            playerOne={playerOne}
            playerTwo={playerTwo}
          />
        );
      case Steps.SearchPlayerOne:
        return (
          <SearchPlayer
            handleSelectPlayer={handleSelectPlayer}
            onContinue={handleNextStep}
            onBack={handleBackStep}
            headerLabel={'Player 1'}
          />
        );
      case Steps.SearchPlayerTwo:
        return (
          <SearchPlayer
            handleSelectPlayer={handleSelectPlayer}
            onContinue={handleNextStep}
            onBack={handleBackStep}
            headerLabel={'Player 2'}
          />
        );

      case Steps.SetScores:
        return <SetScores />;
      default:
        return <Record onClick={handleNextStep} />;
    }
  };

  return (
    <div className="h-full">
      <div className="h-full">{renderStep()}</div>
    </div>
  );
};
