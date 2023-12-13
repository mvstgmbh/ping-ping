export type ButtonProps = {
  onClick: () => void;
  label: string;
};

export const PrimaryButton = ({ onClick, label }: ButtonProps) => {
  return (
    <button
      className=" bg-[#0D0D0D] text-white font-bold py-[12px] px-[24px] border border-[#243c5a] rounded-2xl"
      onClick={onClick}
    >
      {label}
    </button>
  );
};
