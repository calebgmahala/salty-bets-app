import { Bet, EntryValue, TypedEntryValue } from "./types";

type PayoutResponse<A extends EntryValue> = Partial<TypedEntryValue<A>>;

/**
 * Generated Payout values to winning players given odds, bets, and the winning item
 *
 * @param odds The odds that will be used to calculate payout
 * @param bets All of the current bets placed on the items by players
 * @param winner The winning item to payout bets to
 * @returns
 */
export const payout = <Players extends EntryValue, Odds extends EntryValue>(
  odds: Odds,
  bets: Bet<Players, Odds>[],
  winner: keyof Odds
): PayoutResponse<Players> => {
  // If there are no bets, throw an error
  if (!bets.length) {
    throw "No bets given";
  }

  // Find the winning bets and accumulate the payout for winning players
  const winningPayoutRatio = odds[winner];
  return bets
    .filter(({ item }) => item === winner)
    .reduce<PayoutResponse<Players>>((acc, { id, value }) => {
      const winningsFromOtherBets = acc[id] ?? 0;
      acc[id] = winningsFromOtherBets + value * winningPayoutRatio;
      return acc;
    }, {});
};
