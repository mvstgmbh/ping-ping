import Image from 'next/image';

type Props = {
  svg: string;
  avatarSelected: boolean;
};

export const AvatarItem = ({ svg, avatarSelected }: Props) => (
  <div className={`flex flex-col items-center justify-center ${avatarSelected ? 'border-4 border-black rounded-full' : ''}`}>
    <Image src={svg} alt={'avatar'} width={90} height={90} />
  </div>
);
