import { apiService } from '@/shared/infra/apiService';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';
import { ChooseAvatar } from './steps/ChooseAvatar';
import { EnterPlayerData } from './steps/EnterPlayerData';

export enum Steps {
  EnterPlayerData = 'enterPlayerData',
  ChooseAvatar = 'chooseAvatar',
}

export const CreatePlayer = () => {
  const [currentStep, setCurrentStep] = useState(Steps.EnterPlayerData);
  const [previousStep, setPreviousStep] = useState<Steps>();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [avatar, setAvatar] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { push } = useRouter();

  const handleNextStep = (stepName: Steps) => {
    setCurrentStep(stepName);
    setPreviousStep(currentStep);
  };

  const handleBackStep = () => {
    setCurrentStep(previousStep || Steps.EnterPlayerData);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      setIsLoading(true);
      await apiService
        .post(
          '/player',
          { username, email, avatar },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )
        .then((response) => {
          setIsLoading(false);
          push('/record');
        });
    } catch (error) {
      console.error(error);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case Steps.EnterPlayerData:
        return (
          <EnterPlayerData
            setUsername={setUsername}
            setEmail={setEmail}
            onContinue={handleNextStep}
            onBack={handleBackStep}
          />
        );
      case Steps.ChooseAvatar:
        return <ChooseAvatar setAvatar={setAvatar} onBack={handleBackStep} isLoading={isLoading} />;
      default:
        return (
          <EnterPlayerData
            setUsername={setUsername}
            setEmail={setEmail}
            onContinue={handleNextStep}
            onBack={handleBackStep}
          />
        );
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-6">
      <form onSubmit={handleSubmit} className="flex flex-col justify-between gap-4 h-full w-full">
        {renderStep()}
      </form>
    </div>
  );
};
