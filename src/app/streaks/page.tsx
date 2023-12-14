import prisma from '../../../db/prismaClient';
import { Player, getRankingTopPlayers } from '../../player/domain/Player';
import { withNavbar } from '../components/hoc/withNavbar';
import { Streaks } from '../components/organisms/Streaks/Streaks';

const StreaksPage = async () => {
  const players = (await prisma.player.findMany()) as Player[];
  const sorted = getRankingTopPlayers(players);
  return withNavbar(<Streaks players={sorted} />);
};

export default StreaksPage;
