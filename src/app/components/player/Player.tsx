import {
  Player,
  getFavouriteOpponent,
  getPointDifference,
  getRankingPositionString,
  getTotalMatches,
} from '@/player/domain/Player';
import { MainContainer } from '../ui/MainContainer';
import { InfoCard } from './InfoCard';
import { InfoRow } from './InfoRow';
import prisma from '../../../../db/prismaClient';
import { FadeInContainer } from '../ui/FadeInContainer';

const PlayerDetail = async ({ id }: { id: number }) => {
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
      <FadeInContainer>
        <div className="flex flex-col items-center justify-center gap-4 pt-24 pb-4">
          <div className="h-20 w-20 bg-[#D9D9D9] rounded-full">{/* image avatar */}</div>

          <p className="text-2xl font-bold">{player.username}</p>
        </div>
      </FadeInContainer>

      <FadeInContainer>
        <div className="pt-4 grid grid-cols-3 gap-4">
          <InfoCard text="matches played" number={totalMatchesPlayed} />
          <InfoCard text="matches won" number={player.matchesWon} />
          <InfoCard text="point difference" number={totalPointDifference} />
        </div>
      </FadeInContainer>

      <FadeInContainer>
        <div className="p-4 mt-4 bg-white rounded-2xl">
          <InfoRow text="Current Ranking" value={rankingPosition} />
          <InfoRow text="Favourite Opponent" value={favouriteOpponent ?? ''} />
          <InfoRow text="Current Streak" value={`${player.winStreak} wins`} />
        </div>
      </FadeInContainer>
    </MainContainer>
  );
};

export default PlayerDetail;
