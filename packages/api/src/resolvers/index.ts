import { BuildSchemaOptions } from "type-graphql";
import { PlayerResolver } from "./Player";
import { ItemResolver } from "./Item";

export const Resolvers: BuildSchemaOptions["resolvers"] = [PlayerResolver, ItemResolver];
