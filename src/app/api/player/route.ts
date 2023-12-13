import { type NextRequest } from 'next/server';
import prisma from '../../../../db/prismaClient';

export async function GET() {
  // get all players from db
  const players = await prisma.player.findMany({
    include: {
      matchesAsPlayerA: true,
      matchesAsPlayerB: true,
    },
  });
  return new Response(JSON.stringify(players), { status: 200 });
}

export async function POST(req: NextRequest) {
  const body = (await req.json()) as { username: string; email: string; avatar: string };

  if (!body.username || !body.email || !body.email.endsWith('@mvst.co') || !body.avatar) {
    return new Response(JSON.stringify({ message: 'invalid body' }), { status: 400 });
  }

  if (await playerExists(body.email, body.username)) {
    return new Response(JSON.stringify({ message: 'player already exists' }), { status: 409 });
  }

  await prisma.player.create({
    data: {
      username: body.username,
      email: body.email,
      avatar: body.avatar,
    },
  });

  return new Response(JSON.stringify({ message: 'ok' }), { status: 201 });
}

async function playerExists(email: string, username: string): Promise<boolean> {
  const playerByEmail = await prisma.player.findUnique({ where: { email } });
  const playerByUsername = await prisma.player.findUnique({ where: { username } });
  return !!playerByEmail || !!playerByUsername;
}
