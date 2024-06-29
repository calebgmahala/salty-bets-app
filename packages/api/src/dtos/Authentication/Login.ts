import { ArgsType, Field } from "type-graphql";
import { CreatePlayerInput as SDKLoginInput } from "../../../../db/src/sdk/Player";

@ArgsType()
export class LoginInput implements SDKLoginInput {
  @Field(() => String)
  username: string;

  @Field(() => String)
  password: string;
}
