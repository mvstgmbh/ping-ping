import { apiService } from "@/shared/infra/apiService";
import { FormEvent, useState } from "react";
import { PrimaryButton } from "../../atoms";
import { ChooseAvatar } from "./steps/ChooseAvatar";
import Image from 'next/image';
import ChevronLeft from '@public/chevron-left.svg';

export const CreatePlayer = () => {
  const [step, setStep] = useState(1);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [avatar, setAvatar] = useState('');
  const isFirstStepCompleted = username !== '' && email !== '';

  const handleNextStep = () => {
    if (!isFirstStepCompleted) return;
    setStep(step + 1);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (step === 1) {
      handleNextStep();
    } else if (step === 2) {
      try {
        const response = await apiService.post('/player', { username, email, avatar }, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
      } catch (error) {
        console.error(error);
      }
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-full p-6">
      <form onSubmit={handleSubmit} className="flex flex-col justify-between gap-4 h-full w-full">
        {step === 1 && (
          <div className="flex flex-col justify-between items-center h-full">
            <button className="absolute top-0 left-0 pt-7 pl-6">
              <Image src={ChevronLeft} alt={'chevron-left'} />
            </button>
            <h1 className="text-[#0D0D0D] text-center text-3xl font-bold max-w-[70%]">Let's get ready to play!</h1>
            <div className="w-full mb-16">
              <div className="flex flex-col mb-8">
                <label htmlFor="username" className="text-[#0D0D0D] mb-1 font-semibold">What’s your name?</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Enter your name"
                  className="text-[#0D0D0D] py-[12px] px-[24px] rounded-2xl"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="flex flex-col mb-6">
                <label htmlFor="email" className="text-[#0D0D0D] mb-1 font-semibold">What’s your email?</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="text-[#0D0D0D] py-[12px] px-[24px] rounded-2xl"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <PrimaryButton label={"Next"} onClick={handleNextStep} />
          </div>
        )}
        {step === 2 && <ChooseAvatar />}
      </form>
    </div>
  );
};
