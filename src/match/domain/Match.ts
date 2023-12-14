import { Player } from '@prisma/client';

export interface Match {
  id: number;
  playerAId: number;
  playerBId: number;
  playerA: Player;
  playerB: Player;
  scorePlayerA: number;
  scorePlayerB: number;
  createdAt: Date;
  updatedAt: Date;
}
