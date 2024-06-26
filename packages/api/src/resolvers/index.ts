import { BuildSchemaOptions } from "type-graphql";
import { PlayerResolver } from "./Player";
import { ItemResolver } from "./Item";
import { AuthenticationResolver } from "./Authentication";

export const Resolvers: BuildSchemaOptions["resolvers"] = [PlayerResolver, ItemResolver, AuthenticationResolver];