import { MainContainer } from '@/app/components/ui/MainContainer';
import prisma from '../../../../db/prismaClient';
import {
  Player,
  getFavouriteOpponent,
  getPointDifference,
  getRankingPositionString,
  getTotalMatches,
} from '@/player/domain/Player';
import { InfoCard } from '@/app/components/player/InfoCard';
import { InfoRow } from '@/app/components/player/InfoRow';

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
  const players = (await prisma.player.findMany({
    include: {
      matchesAsPlayerA: true,
      matchesAsPlayerB: true,
    },
  })) as Player[];
  if (!players) {
    return null;
  }
  const player = players.find((player) => player.id === id);
  const playerMatches = await prisma.match.findMany({
    where: {
      OR: [
        {
          playerAId: id,
        },
        {
          playerBId: id,
        },
      ],
    },
    include: {
      playerA: true,
      playerB: true,
    },
  });

  if (!player) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p>Player not found</p>
      </div>
    );
  }

  const totalMatchesPlayed = getTotalMatches(player.matchesWon, player.matchesLost);
  const totalPointDifference = getPointDifference(player.pointsFavour, player.pointsAgainst);
  const favouriteOpponent = getFavouriteOpponent(playerMatches);
  const rankingPosition = getRankingPositionString(player.id, players);

  return (
    <MainContainer className="px-4">
      <div className="flex flex-col items-center justify-center gap-4 pt-24 pb-4">
        <div className="h-20 w-20 bg-[#D9D9D9] rounded-full">{/* image avatar */}</div>

        <p className="text-2xl font-bold">{player.username}</p>
      </div>

      <div className="pt-4 grid grid-cols-3 gap-4">
        <InfoCard text="matches played" number={totalMatchesPlayed} />
        <InfoCard text="matches won" number={player.matchesWon} />
        <InfoCard text="point difference" number={totalPointDifference} />
      </div>

      <div className="p-4 mt-4 bg-white rounded-2xl">
        <InfoRow text="Current Ranking" value={rankingPosition} />
        <InfoRow text="Favourite Opponent" value={favouriteOpponent ?? ''} />
        <InfoRow text="Current Streak" value={`${player.winStreak} wins`} />
      </div>
    </MainContainer>
  );
};

export default Player;
