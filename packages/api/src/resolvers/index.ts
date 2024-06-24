import { BuildSchemaOptions } from "type-graphql";
import { PlayerResolver } from "./Player";

export const Resolvers: BuildSchemaOptions["resolvers"] = [PlayerResolver];
