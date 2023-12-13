import Image from 'next/image';

type Props = {
  svg: string;
  itemSelected?: string;
};

export const AvatarItem = ({ svg }: Props) => (
  <div className="flex flex-col">
    <Image src={svg} alt={'avatar'} />
  </div>
);
