export type ButtonProps = {
  onClick: () => void;
  label: string;
  isLoading?: boolean;
  type?: 'button' | 'submit';
};

const SmallLoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-500"></div>
    </div>
  );
};

export const PrimaryButton = ({ onClick, label, isLoading, type = 'button' }: ButtonProps) => {
  return (
    <button
      type={type}
      className="w-full bg-[#0D0D0D] text-white font-bold py-[12px] px-[24px] border border-[#243c5a] rounded-2xl"
      onClick={onClick}
    >
      {isLoading ? <SmallLoadingSpinner /> : label}
    </button>
  );
};
