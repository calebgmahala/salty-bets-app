import { Field, ID, Int, ObjectType } from "type-graphql";

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

  @Field(() => String)
  prevTier: string;

  @Field(() => String)
  tier: string;

  @Field(() => Int)
  tierElo: number;
}
