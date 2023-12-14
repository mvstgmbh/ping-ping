'use client';

import { FC, PropsWithChildren } from 'react';
import FadeIn from 'react-fade-in';

export const FadeInContainer: FC<PropsWithChildren> = ({ children }) => {
  return <FadeIn>{children}</FadeIn>;
};
