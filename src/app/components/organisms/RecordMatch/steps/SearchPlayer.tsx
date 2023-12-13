import { HeaderWithBackIcon } from '../../../molecules/HeaderWithBackIcon';
import { ChoosePlayerProps, Steps } from '../RecordMatch';

type Props = {
  handleSelectPlayer: (player: ChoosePlayerProps) => void;
  onContinue: (step: Steps) => void;
  onBack: () => void;
  headerLabel: string;
};

export const SearchPlayer = ({ handleSelectPlayer, onContinue, onBack, headerLabel }: Props) => {
  return (
    <div className="h-full">
      <HeaderWithBackIcon label={headerLabel} onClickBack={onBack} />
    </div>
  );
};
