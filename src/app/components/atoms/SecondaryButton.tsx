import { ButtonProps } from './PrimaryButton';

export const SecondaryButton = ({ onClick, label }: ButtonProps) => {
  return (
    <button
      className="w-full text-[#0D0D0D] font-bold py-[12px] px-[24px] border border-[#243c5a] rounded-2xl"
      onClick={onClick}
    >
      {label}
    </button>
  );
};
