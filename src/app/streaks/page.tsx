import prisma from '../../../db/prismaClient';
import { Player, getRanking } from '../../player/domain/Player';
import { withNavbar } from '../components/hoc/withNavbar';
import { Streaks } from '../components/organisms/Streaks/Streaks';

const StreaksPage = async () => {
  const players = (await prisma.player.findMany()) as Player[];
  const sorted = getRanking(players);
  return withNavbar(<Streaks players={sorted} />);
};

export default StreaksPage;
