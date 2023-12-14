import Image, { StaticImageData } from 'next/image';
import { useState, useEffect } from 'react';
import { HeaderWithIcons } from '@/app/components/molecules/HeaderWithIcons';
import { AvatarItem } from '@/app/components/atoms/AvatarItem';

type Props = {
  setAvatar: (avatar: string) => void;
  onBack: () => void;
};

type Avatar = {
  name: string;
  path: string;
};

const avatars: Record<string, Avatar> = {
  avatar1: { name: 'avatar1', path: '/avatar1.svg' },
  avatar2: { name: 'avatar2', path: '/avatar2.svg' },
  avatar3: { name: 'avatar3', path: '/avatar3.svg' },
  avatar4: { name: 'avatar4', path: '/avatar4.svg' },
  avatar5: { name: 'avatar5', path: '/avatar5.svg' },
  avatar6: { name: 'avatar6', path: '/avatar6.svg' },
  avatar7: { name: 'avatar7', path: '/avatar7.svg' },
  avatar8: { name: 'avatar8', path: '/avatar8.svg' },
  avatar9: { name: 'avatar9', path: '/avatar9.svg' },
  avatar10: { name: 'avatar10', path: '/avatar10.svg' },
  avatar11: { name: 'avatar11', path: '/avatar11.svg' },
  avatar12: { name: 'avatar12', path: '/avatar12.svg' },
};

export const ChooseAvatar = ({ setAvatar, onBack }: Props) => {
  const [selectedAvatar, setSelectedAvatar] = useState<Avatar | null>(null);

  useEffect(() => {
    setSelectedAvatar(avatars.avatar1);
  }, []);

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
      <div className='grid grid-cols-3 gap-8 p-4'>
        {Object.values(avatars).map((avatar) => (
          <div key={avatar.name} onClick={() => handleAvatarClick(avatar)}>
            <AvatarItem svg={avatar.path} avatarSelected={selectedAvatar === avatar} />
          </div>
        ))}
      </div>
      <button type="submit" className="bg-[#0D0D0D] text-white font-bold py-[12px] px-[24px] border border-[#243c5a] rounded-2xl w-full">
        Let's Ping
      </button>
    </div>
  );
};
