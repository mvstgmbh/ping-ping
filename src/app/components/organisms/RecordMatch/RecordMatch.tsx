'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Player } from '../../../../player/domain/Player';
import { ChoosePlayers } from './steps/ChoosePlayers';
import { Record } from './steps/Record';
import { SearchPlayer } from './steps/SearchPlayer';
import { SetScores } from './steps/SetScores';
import { apiService } from '@/shared/infra/apiService';

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

export const RecordMatch = () => {
  const { push } = useRouter();
  const [currentStep, setCurrentStep] = useState(Steps.Record);
  const [players, setPlayers] = useState<Player[]>([]);

  const [previousStep, setPreviousStep] = useState<Steps>();
  const [playerOne, setPlayerOne] = useState<Player>();
  const [playerTwo, setPlayerTwo] = useState<Player>();

  useEffect(() => {
    apiService.get('/player').then((response) => {
      setPlayers(response.data);
    });
  }, []);

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
            hasSelectedBothPlayers={!!playerOne?.id && !!playerTwo?.id}
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
            playerList={players}
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
            playerList={players}
          />
        );

      case Steps.SetScores:
        return <SetScores onBack={handleBackStep} playerTwo={playerTwo} playerOne={playerOne} />;
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
