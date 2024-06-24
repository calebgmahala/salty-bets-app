// Keys
// User keys
export const user1Key = "user1";
export const user2Key = "user2";
export const user3Key = "user3";
export const user4Key = "user4";
export const user5Key = "user5";
export const user6Key = "user6";
export const user7Key = "user7";
// Item Keys
export const item1Key = "item1";
export const item2Key = "item2";
export const item3Key = "item3";

// Bets
// Bets on item 1
export const item1Bets = [
  { id: user1Key, value: 1, item: item1Key },
  { id: user2Key, value: 22, item: item1Key },
  { id: user3Key, value: 18, item: item1Key },
  { id: user4Key, value: 9, item: item1Key },
];
// Bets on item 2
export const item2Bets = [
  { id: user5Key, value: 2, item: item2Key },
  { id: user6Key, value: 28, item: item2Key },
];
// Bets on item 3
export const item3Bets = [{ id: user7Key, value: 20, item: item3Key }];

// Odds
export const mockOdds = {
  [item1Key]: 2,
  [item2Key]: 30 / 9,
  [item3Key]: 5,
};
