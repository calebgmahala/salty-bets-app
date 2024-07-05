import { Field, Float, ID, Int, ObjectType } from "type-graphql";
import { Fighter } from "./Fighter";
import { Color, MatchType, Tier } from "./BasicTypes";

@ObjectType()
export class Match {
  @Field(() => Float)
  betBlue: number;

  @Field(() => Float)
  betRed: number;

  @Field(() => Color)
  colour: Color;

  @Field(() => Date)
  date: Date;

  @Field(() => Int)
  fighterBlueId: number;

  @Field(() => Fighter)
  fighterBlue: Fighter;

  @Field(() => Int)
  fighterRedId: number;

  @Field(() => Fighter)
  fighterRed: Fighter;

  @Field(() => ID)
  id: number;

  @Field(() => MatchType)
  matchFormat: MatchType;

  @Field(() => Int)
  streakBlue: number;

  @Field(() => Int)
  streakRed: number;

  @Field(() => Tier)
  tier: Tier;

  @Field(() => Int)
  winnerId: number;

  @Field(() => Fighter)
  winner: Fighter;
}
