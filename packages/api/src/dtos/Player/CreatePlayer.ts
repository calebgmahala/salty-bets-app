import { ArgsType, Field, Float, Int } from "type-graphql";
import { CreatePlayerInput as SDKCreatePlayerInput } from "../../../../db/src/sdk/Player";

@ArgsType()
export class CreatePlayerInput implements SDKCreatePlayerInput {
  @Field(() => Int, { nullable: true })
  id?: number;

  @Field(() => String)
  username: string;

  @Field(() => String)
  password: string;

  @Field(() => Float, { nullable: true })
  balance?: number;
}
