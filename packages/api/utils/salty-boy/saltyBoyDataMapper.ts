// eslint-disable-next-line @typescript-eslint/no-explicit-any -- response from the salty-boy API is not typed
export const mapToFighter = (fighterData: any) => ({
  bestStreak: fighterData.best_streak,
  createdTime: new Date(fighterData.created_time),
  elo: fighterData.elo,
  id: fighterData.id,
  lastUpdated: new Date(fighterData.last_updated),
  name: fighterData.name,
  prevTier: fighterData.prev_tier,
  tier: fighterData.tier,
  tierElo: fighterData.tier_elo,
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- response from the salty-boy API is not typed
export const mapToMatch = (matchData: any) => ({
  betBlue: matchData.bet_blue,
  betRed: matchData.bet_red,
  colour: matchData.colour,
  date: matchData.date,
  fighterBlueId: matchData.fighter_blue,
  fighterRedId: matchData.fighter_red,
  id: matchData.id,
  matchFormat: matchData.match_format,
  streakBlue: matchData.streak_blue,
  streakRed: matchData.streak_red,
  tier: matchData.tier,
  winnerId: matchData.winner,
});
