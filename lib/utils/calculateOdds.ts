import { EntryValue, TypedEntryValue } from "./types";

/**
 * Calculates the payout odds for each item
 *
 * @param bets The total bets for each item
 * @returns The odds for each item
 */
export const calculateOdds = <TotalBets extends EntryValue>(
  bets: TotalBets
): TypedEntryValue<TotalBets> | undefined => {
  // If there are no bets, return 0
  if (Object.keys(bets).length === 0) {
    return undefined;
  }

  // Accumulate the total bet values for each item
  const total = Object.values(bets).reduce((acc, curr) => {
    return acc + curr;
  }, 0);

  // Calculate the odds for each item
  const odds = Object.keys(bets).reduce((acc, curr: keyof TotalBets) => {
    acc[curr] = total / bets[curr];
    return acc;
  }, {} as TypedEntryValue<TotalBets>);

  // If the odds are malformed, return undefined
  if (Object.values(odds).some((value) => !value || value < 1)) {
    return undefined;
  }

  return odds;
};
