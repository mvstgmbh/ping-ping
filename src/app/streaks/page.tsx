import { withNavbar } from '../components/hoc/withNavbar';
import { Streaks } from '../components/organisms/Streaks/Streaks';

const StreaksPage = () => {
  return withNavbar(<Streaks />);
};

export default StreaksPage;
