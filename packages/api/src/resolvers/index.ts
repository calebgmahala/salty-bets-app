import { BuildSchemaOptions } from "type-graphql";
import { PlayerResolver } from "./Player";
import { AuthenticationResolver } from "./Authentication";

export const Resolvers: BuildSchemaOptions["resolvers"] = [
  PlayerResolver,
  AuthenticationResolver,
];
