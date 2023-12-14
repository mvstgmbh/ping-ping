import { clsx } from 'clsx';
import React, { FC, PropsWithChildren } from 'react';

export const MainContainer: FC<PropsWithChildren & { className?: string }> = ({
  children,
  className,
}) => {
  return (
    <main className={clsx('dvh bg-gradient-to-t from-[#FBE9E9] to-[#D9EDF4] h-screen', className)}>
      {children}
    </main>
  );
};
