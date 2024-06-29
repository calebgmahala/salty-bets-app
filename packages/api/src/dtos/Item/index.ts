import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Item {
  @Field(() => Number)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => String, { nullable: true })
  color?: string;
}
