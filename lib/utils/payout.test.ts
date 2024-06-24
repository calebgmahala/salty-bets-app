import { expect, test, describe } from "vitest";
import { payout } from "./payout";
import { Bet } from "./types";
import {
  user1Key,
  user2Key,
  user3Key,
  user4Key,
  item1Key,
  mockOdds,
  item1Bets,
  item2Bets,
  item3Bets,
} from "./fixtures";

describe("payout()", () => {
  test("throws an error if there are no bets", () => {
    expect(() => payout(mockOdds, [], "item1")).toThrow("No bets given");
  });
  test("correctly calculates the payout for each listed player", () => {
    const expectedPayout = {
      [user1Key]: 2,
      [user2Key]: 44,
      [user3Key]: 36,
      [user4Key]: 18,
    };

    expect(
      payout(
        mockOdds,
        [...item1Bets, ...item2Bets, ...item3Bets] as Bet[],
        item1Key
      )
    ).toEqual(expectedPayout);
  });
  test("correctly calculates the payout for each listed player even if they have multiple bets", () => {
    const updatedItem1Bets = [
      { id: user1Key, value: 1, item: item1Key },
      { id: user1Key, value: 22, item: item1Key },
      { id: user3Key, value: 18, item: item1Key },
      { id: user4Key, value: 9, item: item1Key },
    ];

    const expectedPayout = {
      [user1Key]: 46,
      [user3Key]: 36,
      [user4Key]: 18,
    };

    expect(
      payout(
        mockOdds,
        [...updatedItem1Bets, ...item2Bets, ...item3Bets] as Bet[],
        item1Key
      )
    ).toEqual(expectedPayout);
  });
});
