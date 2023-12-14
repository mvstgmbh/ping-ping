import { withNavbar } from '../components/hoc/withNavbar';
import { TopPlayers } from '../components/organisms/TopPlayers/TopPlayers';

const TopPlayersPage = () => {
  return withNavbar(<TopPlayers />);
};

export default TopPlayersPage;
