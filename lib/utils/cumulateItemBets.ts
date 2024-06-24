import { Bet, TypedEntryValue } from "./types";

/**
 *
 * @param bets The bets to consolidate onto items
 * @returns An object with keys matching each item and values equal to the total bets on that item
 */
export const cumulateItemBets = <A, Items>(
  bets: Bet<A, Items>[]
): TypedEntryValue<Items> => {
  return bets.reduce((acc, { item, value }) => {
    const previousBets = acc[item] ?? 0;
    acc[item] = previousBets + value;
    return acc;
  }, {} as TypedEntryValue<Items>);
};
