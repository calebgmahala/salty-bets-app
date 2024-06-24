import { expect, test, describe } from "vitest";
import { calculateOdds } from "./calculateOdds";
import { item1Key, item2Key, item3Key, mockOdds } from "./fixtures";

describe("calculateOdds()", () => {
  test("returns undefined if no bet inputs", () => {
    expect(calculateOdds({})).toBe(undefined);
  });
  test("returns undefined if item odds are less than 1", () => {
    expect(
      calculateOdds({
        [item1Key]: 0,
        [item2Key]: 2,
        [item3Key]: -2,
      })
    ).toBe(undefined);
  });
  test("returns 1 if only one item odds", () => {
    expect(calculateOdds({ [item1Key]: 2 })).toEqual({ [item1Key]: 1 });
  });
  test("returns correct item odds for items", () => {
    expect(
      calculateOdds({
        [item1Key]: 50,
        [item2Key]: 30,
        [item3Key]: 20,
      })
    ).toEqual(mockOdds);
  });
});
