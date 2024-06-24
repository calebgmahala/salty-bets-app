import { Field, Float, ObjectType } from "type-graphql";

@ObjectType()
export class Bet {
  @Field(() => Number)
  id: number;

  @Field(() => Number)
  userId: number;

  @Field(() => Number)
  itemId: number;

  @Field(() => Float)
  value: number;
}
