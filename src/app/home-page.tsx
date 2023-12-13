'use client';
import { Onboarding } from '@/app/components/organisms/Onboarding/Onboarding';
import Cookie from 'js-cookie';
import { withNavbar } from './components/hoc/withNavbar';
import { RecordMatch } from './components/organisms/RecordMatch/RecordMatch';
import { CookieKeys } from './enums/cookie.enums';

export default function HomePage() {
  const hasCompletedOnboarding = JSON.parse(Cookie.get(CookieKeys.OnboardingComplete) || 'false');

  if (!hasCompletedOnboarding) {
    return <Onboarding />;
  }

  return withNavbar(<RecordMatch />);
}
