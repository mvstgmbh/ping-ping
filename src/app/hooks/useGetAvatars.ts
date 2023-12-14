export type Avatar = {
  name: string;
  path: string;
};
export const useGetAvatars = () => {
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

  return avatars;
};
