import { Field, ID, Int, ObjectType } from "type-graphql";
import { Tier } from "./BasicTypes";

@ObjectType()
export class Fighter {
  @Field(() => ID)
  id: number;

  @Field(() => Int)
  bestStreak: number;

  @Field(() => Date)
  createdTime: Date;

  @Field(() => Int)
  elo: number;

  @Field(() => Date)
  lastUpdated: Date;

  @Field(() => String)
  name: string;

  @Field(() => Tier)
  prevTier: Tier;

  @Field(() => Tier)
  tier: Tier;

  @Field(() => Int)
  tierElo: number;
}
