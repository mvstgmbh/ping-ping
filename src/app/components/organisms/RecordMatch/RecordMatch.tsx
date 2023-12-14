'use client';

import { useState } from 'react';
import { Player } from '../../../../player/domain/Player';
import { ChoosePlayers } from './steps/ChoosePlayers';
import { Record } from './steps/Record';
import { SearchPlayer } from './steps/SearchPlayer';
import { SetScores } from './steps/SetScores';

export enum Steps {
  Record = 'record',
  ChoosePlayers = 'choosePlayers',
  SearchPlayerOne = 'searchPlayerOne',
  SearchPlayerTwo = 'searchPlayerTwo',
  SetScores = 'setScores',
}

type Props = {
  players: Player[];
};

export const RecordMatch = ({ players }: Props) => {
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

  const handleSelectPlayer = (player: Player) => {
    if (currentStep === Steps.SearchPlayerOne) {
      setPlayerOne(player);
    } else {
      setPlayerTwo(player);
    }
  };

  const reset = () => {
    setPlayerOne(undefined);
    setPlayerTwo(undefined);
    setCurrentStep(Steps.Record);
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
            hasSelectedBothPlayers={!!playerOne?.id && !!playerTwo?.id}
          />
        );
      case Steps.SearchPlayerOne:
        return (
          <SearchPlayer
            handleSelectPlayer={handleSelectPlayer}
            onContinue={handleNextStep}
            onBack={handleBackStep}
            isPlayerOne
            playerOne={playerOne}
            playerTwo={playerTwo}
            playerList={players}
          />
        );
      case Steps.SearchPlayerTwo:
        return (
          <SearchPlayer
            handleSelectPlayer={handleSelectPlayer}
            onContinue={handleNextStep}
            onBack={handleBackStep}
            playerTwo={playerTwo}
            playerOne={playerOne}
            playerList={players}
          />
        );

      case Steps.SetScores:
        return (
          <SetScores
            onBack={handleBackStep}
            playerTwo={playerTwo}
            playerOne={playerOne}
            reset={reset}
          />
        );
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
