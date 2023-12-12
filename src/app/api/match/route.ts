import { type NextRequest } from 'next/server';
import prisma from '../../../../db/prismaClient';

interface Match {
  playerAId: number;
  playerBId: number;
  scorePlayerA: number;
  scorePlayerB: number;
}

export async function POST(req: NextRequest) {
  const body = (await req.json()) as Match;

  if (!body.playerAId || !body.playerBId) {
    return new Response(JSON.stringify({ message: 'invalid body' }), { status: 400 });
  }

  // await prisma.match.create({
  //   data: {
  //     username: body.username,
  //     email: body.email,
  //     avatar: body.avatar,
  //   },
  // });

  return new Response(JSON.stringify({ message: 'ok' }), { status: 201 });
}
