'use client';

import { Onboarding } from '@/app/components/organisms/Onboarding/Onboarding';
import { RecordMatch } from './components/organisms/RecordMatch/RecordMatch';
import { StorageKeys, useLocalStorage } from './hooks/useLocalStorage';

export default function HomePage() {
  const { get } = useLocalStorage();

  const hasCompletedOnboarding = get(StorageKeys.onboardingComplete);

  if (!hasCompletedOnboarding) {
    return <Onboarding />;
  }

  return <RecordMatch />;
}
