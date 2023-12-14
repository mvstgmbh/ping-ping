import { Player } from '@/player/domain/Player';
import prisma from '../../../db/prismaClient';
import { withNavbar } from '../components/hoc/withNavbar';
import { TopPlayers } from '../components/organisms/TopPlayers/TopPlayers';

const TopPlayersPage = async () => {
  const players = (await prisma.player.findMany()) as Player[];

  return withNavbar(<TopPlayers players={players} />);
};

export default TopPlayersPage;
