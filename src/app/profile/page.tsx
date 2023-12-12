'use client';
import { withNavbar } from '../components/hoc/withNavbar';
import { Profile } from '../components/organisms/Profile/Profile';

const ProfilePage = () => {
  // fetch serverside data

  return (
    <main className="dvh bg-gradient-to-t from-[#F6F6F4] via-[#FBE9E9] to-[#D9EDF4]">
      {withNavbar(<Profile />)}
    </main>
  );
};

export default ProfilePage;
