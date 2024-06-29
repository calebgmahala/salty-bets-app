import { ArgsType, Field, Int } from "type-graphql";
import { CreateItemInput as SDKCreateItemInput } from "../../../../db/src/sdk/Item";

@ArgsType()
export class CreateItemInput implements SDKCreateItemInput {
  @Field(() => Int, { nullable: true })
  id?: number;

  @Field(() => String)
  name: string;

  @Field(() => String, { nullable: true })
  color?: string;

}
