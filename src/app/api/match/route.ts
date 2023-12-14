import { type NextRequest } from 'next/server';
import prisma from '../../../../db/prismaClient';

export interface MatchDTO {
  playerAId: number;
  playerBId: number;
  scorePlayerA: number;
  scorePlayerB: number;
}

const MAX_SCORE = 12;
const MIN_SCORE = -1;

export async function POST(req: NextRequest) {
  const body = (await req.json()) as MatchDTO;
  const hasPlayersIdMissing = !body.playerAId || !body.playerBId;
  const hasScoreMissing =
    (!body.scorePlayerA && body.scorePlayerA !== 0) ||
    (!body.scorePlayerB && body.scorePlayerB !== 0);
  const isInvalidScore =
    body.scorePlayerA < MIN_SCORE ||
    body.scorePlayerB < MIN_SCORE ||
    body.scorePlayerA > MAX_SCORE ||
    body.scorePlayerB > MAX_SCORE;

  if (hasPlayersIdMissing || hasScoreMissing) {
    return new Response(JSON.stringify({ message: 'invalid body' }), { status: 400 });
  }

  if (body.scorePlayerA === body.scorePlayerB) {
    return new Response(JSON.stringify({ message: 'draw' }), { status: 400 });
  }

  if (isInvalidScore) {
    return new Response(JSON.stringify({ message: 'invalid score' }), { status: 400 });
  }

  const playerA = await prisma.player.findUnique({
    where: { id: body.playerAId },
  });

  const playerB = await prisma.player.findUnique({
    where: { id: body.playerBId },
  });

  if (!playerA || !playerB) {
    return new Response(JSON.stringify({ message: 'invalid players' }), { status: 400 });
  }

  const winner = body.scorePlayerA > body.scorePlayerB ? 'playerA' : 'playerB';

  const updatedPlayerA = {
    ...playerA,
    pointsFavour: playerA.pointsFavour + body.scorePlayerA,
    pointsAgainst: playerA.pointsAgainst + body.scorePlayerB,
    matchesWon: winner === 'playerA' ? playerA.matchesWon + 1 : playerA.matchesWon,
    matchesLost: winner === 'playerB' ? playerA.matchesLost + 1 : playerA.matchesLost,
    winStreak: winner === 'playerA' ? playerA.winStreak + 1 : 0,
  };

  const updatedPlayerB = {
    ...playerB,
    pointsFavour: playerB.pointsFavour + body.scorePlayerB,
    pointsAgainst: playerB.pointsAgainst + body.scorePlayerA,
    matchesWon: winner === 'playerB' ? playerB.matchesWon + 1 : playerB.matchesWon,
    matchesLost: winner === 'playerA' ? playerB.matchesLost + 1 : playerB.matchesLost,
    winStreak: winner === 'playerB' ? playerB.winStreak + 1 : 0,
  };

  await prisma.player.update({
    where: { id: body.playerAId },
    data: updatedPlayerA,
  });

  await prisma.player.update({
    where: { id: body.playerBId },
    data: updatedPlayerB,
  });

  await prisma.match.create({
    data: {
      playerAId: body.playerAId,
      playerBId: body.playerBId,
      scorePlayerA: body.scorePlayerA,
      scorePlayerB: body.scorePlayerB,
    },
  });

  return new Response(JSON.stringify({ message: 'ok' }), {
    status: 201,
  });
}
