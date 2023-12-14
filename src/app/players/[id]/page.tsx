import prisma from '../../../../db/prismaClient';
import { withNavbar } from '@/app/components/hoc/withNavbar';
import PlayerDetail from '@/app/components/player/Player';

export async function generateStaticParams() {
  const players = await prisma.player.findMany({
    include: {
      matchesAsPlayerA: true,
      matchesAsPlayerB: true,
    },
  });

  return players.map((player) => ({
    id: player.id.toString(),
  }));
}

const PlayerPage = async ({ params }: { params: { id: string } }) => {
  return withNavbar(<PlayerDetail id={Number(params.id)} />);
};

export default PlayerPage;
