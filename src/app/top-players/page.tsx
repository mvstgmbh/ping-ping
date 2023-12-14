import { withNavbar } from '../components/hoc/withNavbar';
import { TopPlayers } from '../components/organisms/TopPlayers/TopPlayers';
import prisma from '../../../db/prismaClient';
import { Player } from '@/player/domain/Player';

const TopPlayersPage = async () => {
  const players = (await prisma.player.findMany()) as Player[];

  return withNavbar(<TopPlayers players={players} />);
};

export default TopPlayersPage;
