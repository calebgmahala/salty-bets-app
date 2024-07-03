import { BuildSchemaOptions } from "type-graphql";
import { PlayerResolver } from "./Player";
import { ItemResolver } from "./Item";
import { AuthenticationResolver } from "./Authentication";

// All the given schemas used by the graphql api
export const Resolvers: BuildSchemaOptions["resolvers"] = [
  PlayerResolver,
  ItemResolver,
  AuthenticationResolver,
];
