import { registerEnumType } from "type-graphql";

export enum Tier {
  X = "X",
  S = "S",
  A = "A",
  B = "B",
  P = "P",
}
registerEnumType(Tier, {
  name: "Tier",
  description: "The Tier of the match or of a fighter",
});

export enum MatchType {
  MATCHMAKING = "matchmaking",
  TOURNAMENT = "tournament",
  EXHIBITION = "exhibition",
}
registerEnumType(MatchType, {
  name: "MatchType",
  description: "The type of match being played",
});

export enum Color {
  RED = "Red",
  BLUE = "Blue",
}
registerEnumType(Color, {
  name: "Color",
  description: "The color options returned by the salty-boy api",
});
