import { Player } from '@prisma/client';
import { useState } from 'react';
import { ChoosePlayers } from './steps/ChoosePlayers';
import { Record } from './steps/Record';
import { SearchPlayer } from './steps/SearchPlayer';
import { SetScores } from './steps/SetScores';
import { useRouter } from 'next/navigation';

export enum Steps {
  Record = 'record',
  ChoosePlayers = 'choosePlayers',
  SearchPlayerOne = 'searchPlayerOne',
  SearchPlayerTwo = 'searchPlayerTwo',
  SetScores = 'setScores',
}

export const RecordMatch = () => {
  const { push } = useRouter();
  const [currentStep, setCurrentStep] = useState(Steps.Record);

  const [previousStep, setPreviousStep] = useState<Steps>();
  const [playerOne, setPlayerOne] = useState<Player>();
  const [playerTwo, setPlayerTwo] = useState<Player>();

  const handleNextStep = (stepName: Steps) => {
    setCurrentStep(stepName);
    setPreviousStep(currentStep);
  };

  const handleBackStep = () => {
    setCurrentStep(previousStep || Steps.Record);
  };

  const handleAddNewPlayer = () => {
    push('/players/create');
  };

  const handleSelectPlayer = (player: Player) => {
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
            hasSelectedBothPlayers={!!playerOne?.username && !!playerTwo?.username}
          />
        );
      case Steps.SearchPlayerOne:
        return (
          <SearchPlayer
            handleSelectPlayer={handleSelectPlayer}
            onContinue={handleNextStep}
            onBack={handleBackStep}
            onAddNewPlayer={handleAddNewPlayer}
            isPlayerOne
            playerOne={playerOne}
            playerTwo={playerTwo}
          />
        );
      case Steps.SearchPlayerTwo:
        return (
          <SearchPlayer
            handleSelectPlayer={handleSelectPlayer}
            onContinue={handleNextStep}
            onBack={handleBackStep}
            onAddNewPlayer={handleAddNewPlayer}
            playerTwo={playerTwo}
            playerOne={playerOne}
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
