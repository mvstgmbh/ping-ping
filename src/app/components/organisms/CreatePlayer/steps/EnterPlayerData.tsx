import { HeaderWithIcons } from '@/app/components/molecules/HeaderWithIcons';
import { PrimaryButton } from '../../../atoms';
import { Steps } from '../CreatePlayer';

type Props = {
  setUsername: (username: string) => void;
  setEmail: (email: string) => void;
  onContinue: (step: Steps) => void;
  onBack: () => void;
};

export const EnterPlayerData = ({
  setUsername,
  setEmail,
  onContinue,
  onBack,
}: Props) => {
  return (
    <div className="flex flex-col justify-between items-center h-full">
      <HeaderWithIcons label={`Let's get ready to play!`} onClickLeftIcon={onBack} />
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
      <PrimaryButton label={"Next"} onClick={() => onContinue(Steps.ChooseAvatar)} />
    </div>
  );
};
