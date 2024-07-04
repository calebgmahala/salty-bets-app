import { Field, Float, ID, Int, ObjectType } from "type-graphql";
import { Fighter } from "./Fighter";

@ObjectType()
export class Match {
  @Field(() => Float)
  betBlue: number;

  @Field(() => Float)
  betRed: number;

  @Field(() => String)
  colour: string;

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

  @Field(() => String)
  matchFormat: string;

  @Field(() => Int)
  streakBlue: number;

  @Field(() => Int)
  streakRed: number;

  @Field(() => String)
  tier: string;

  @Field(() => Int)
  winnerId: number;

  @Field(() => Fighter)
  winner: Fighter;
}
