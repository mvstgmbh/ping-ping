import prisma from '../../../../db/prismaClient';

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

const Player = async ({ params }: { params: { id: string } }) => {
  const id = Number(params.id);
  const player = await prisma.player.findUnique({
    where: {
      id,
    },
    include: {
      matchesAsPlayerA: true,
      matchesAsPlayerB: true,
    },
  });

  return <div>{JSON.stringify(player, null, 2)}</div>;
};

export default Player;
