import { Match } from '@/match/domain/Match';

export interface Player {
  id: number;
  username: string;
  email: string;
  avatar: string;
  pointsFavour: number;
  pointsAgainst: number;
  matchesWon: number;
  matchesLost: number;
  winStreak: number;
  matchesAsPlayerA: Match[];
  matchesAsPlayerB: Match[];
  createdAt: Date;
  updatedAt: Date;
}

export const getTotalMatches = (won: number, lost: number) => won + lost;

export const getPointDifference = (favour: number, against: number) => favour - against;

export const getFavouriteOpponent = (matches: Match[]) => {
  if (matches.length === 0) {
    return null;
  }
  const opponents: { [key: string]: number } = {};

  matches.forEach((match) => {
    const opponent = match.playerAId === match.playerBId ? match.playerA : match.playerB;
    if (opponents[opponent.username]) {
      opponents[opponent.username] += 1;
    } else {
      opponents[opponent.username] = 1;
    }
  });

  const favouriteOpponent = Object.keys(opponents).reduce((a, b) =>
    opponents[a] > opponents[b] ? a : b
  );

  return favouriteOpponent;
};

export const getRankingTopPlayers = (players: Player[]) =>
  players.sort((a, b) => {
    // if player has no matches, put him at the bottom
    if (a.matchesWon + a.matchesLost === 0) {
      return 1;
    }
    // check matches difference
    const aMatchesDiff = a.matchesWon - a.matchesLost;
    const bMatchesDiff = b.matchesWon - b.matchesLost;

    if (aMatchesDiff === bMatchesDiff) {
      // if matches difference is the same, check points difference
      const aPointsDiff = a.pointsFavour - a.pointsAgainst;
      const bPointsDiff = b.pointsFavour - b.pointsAgainst;

      return bPointsDiff - aPointsDiff;
    }

    return bMatchesDiff - aMatchesDiff;
  });

export const getRankingPosition = (playerId: number, players: Player[]) => {
  const ranking = getRankingTopPlayers(players);

  return ranking.findIndex((rankedPlayer) => rankedPlayer.id === playerId) + 1;
};

export const getRankingPositionString = (playerId: number, players: Player[]) => {
  const position = getRankingPosition(playerId, players);

  switch (position) {
    case 1:
      return '1st';
    case 2:
      return '2nd';
    case 3:
      return '3rd';
    default:
      return `${position}th`;
  }
};
