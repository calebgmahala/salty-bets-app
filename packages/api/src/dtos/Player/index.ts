import { Field, Float, ObjectType } from "type-graphql";
import { PlayersTableWithoutPrivateInfo } from "../../../../db/src/schemas/players";

@ObjectType()
export class Player implements PlayersTableWithoutPrivateInfo {
  @Field(() => Number)
  id: number;

  @Field(() => String)
  username: string;

  @Field(() => Float)
  balance: number;

  @Field(() => Boolean)
  isAdmin: boolean;
}
