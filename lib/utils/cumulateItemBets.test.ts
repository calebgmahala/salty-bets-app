import { expect, test, describe } from "vitest";
import { Bet } from "./types";
import {
  item1Key,
  item2Key,
  item3Key,
  item1Bets,
  item2Bets,
  item3Bets,
} from "./fixtures";
import { cumulateItemBets } from "./cumulateItemBets";

describe("cumulateItemBets()", () => {
  test("returns empty object if there are no bets", () => {
    expect(cumulateItemBets([])).toEqual({});
  });
  test("consolidates bets for items", () => {
    const expectedTotalBets = {
      [item1Key]: 50,
      [item2Key]: 30,
      [item3Key]: 20,
    };

    expect(
      cumulateItemBets([...item1Bets, ...item2Bets, ...item3Bets] as Bet[])
    ).toEqual(expectedTotalBets);
  });
});
