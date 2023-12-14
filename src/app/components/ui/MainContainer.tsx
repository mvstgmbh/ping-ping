import { clsx } from 'clsx';
import React, { FC, PropsWithChildren } from 'react';

export const MainContainer: FC<PropsWithChildren & { className?: string }> = ({
  children,
  className,
}) => {
  return (
    <main
      className={clsx(
        'dvh bg-gradient-to-t from-[#F6F6F4] via-[#FBE9E9] to-[#D9EDF4] h-screen',
        className
      )}
    >
      {children}
    </main>
  );
};
