'use client';
import { withNavbar } from '../components/hoc/withNavbar';
import { Rankings } from '../components/organisms/Rankings/Rankings';

const RankingsPage = () => {
  // fetch serverside data

  return (
    <main className="dvh bg-gradient-to-t from-[#F6F6F4] via-[#FBE9E9] to-[#D9EDF4]">
      {withNavbar(<Rankings />)}
    </main>
  );
};

export default RankingsPage;
