import { AvatarItem } from '@/app/components/atoms/AvatarItem';
import { HeaderWithIcons } from '@/app/components/molecules/HeaderWithIcons';
import { useState } from 'react';
import { Avatar, useGetAvatars } from '../../../../hooks/useGetAvatars';
import { PrimaryButton } from '../../../atoms';

type Props = {
  setAvatar: (avatar: string) => void;
  onBack: () => void;
  isLoading?: boolean;
};

export const ChooseAvatar = ({ setAvatar, onBack, isLoading }: Props) => {
  const avatars = useGetAvatars();
  const [selectedAvatar, setSelectedAvatar] = useState<Avatar | null>(avatars.avatar1);

  const handleAvatarClick = (avatar: Avatar) => {
    if (selectedAvatar && selectedAvatar.name === avatar.name) {
      setSelectedAvatar(null);
      setAvatar('');
    } else {
      setSelectedAvatar(avatar);
      setAvatar(avatar.name);
    }
  };

  return (
    <div className="flex flex-col justify-between items-center h-full">
      <HeaderWithIcons label={'Choose your avatar'} onClickLeftIcon={onBack} />
      <div className="grid grid-cols-3 gap-8 p-4">
        {Object.values(avatars).map((avatar) => (
          <div key={avatar.name} onClick={() => handleAvatarClick(avatar)}>
            <AvatarItem svg={avatar.path} avatarSelected={selectedAvatar?.name === avatar.name} />
          </div>
        ))}
      </div>
      <PrimaryButton type={'submit'} isLoading={isLoading} label="Let's Ping" onClick={() => {}} />
    </div>
  );
};
