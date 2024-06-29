import { Arg, Args, Ctx, Int, Mutation, Query, Resolver } from "type-graphql";
import { Player } from "../dtos/Player";
import { PlayerService } from "../../../db/src/sdk/Player";
import { ResolverContext } from "..";
import { CreatePlayerInput } from "../dtos/Player/CreatePlayer";
import chalk from "chalk";
import { logger } from "../../utils/logger";
import { PlayersTableColumns } from "../../../db/src/schemas/players";
import { GraphQLError } from "graphql";

@Resolver(Player)
export class PlayerResolver {
  @Query(() => [Player])
  async players(@Ctx() { knex }: ResolverContext) {
    logger.debug("getting players...");
    const response = await new PlayerService({ knex }).getPlayers();
    logger.debug(
      `${chalk.greenBright("Success!")} got ${chalk.yellowBright(
        response.length
      )} players`
    );
    return response;
  }

  @Query(() => Player)
  async player(
    @Arg("id", () => Int) id: number,
    @Ctx() { knex }: ResolverContext
  ) {
    logger.debug({ id }, "getting player...");
    const response = await new PlayerService({ knex }).getPlayer(id);
    if (response) {
      logger.debug(
        `${chalk.greenBright("Success!")} got ${chalk.yellowBright(
          response[PlayersTableColumns.USERNAME]
        )}`
      );
    } else {
      logger.debug(
        `${chalk.greenBright(
          "Failed"
        )} to find player with id:  ${chalk.yellowBright(id)}`
      );
      throw new GraphQLError("Failed to find user with the given id", {
        extensions: { code: "INTERNAL_SERVER_ERROR" },
      });
    }

    return response;
  }

  @Mutation(() => Player)
  async createPlayer(
    @Args(() => CreatePlayerInput) input: CreatePlayerInput,
    @Ctx() { knex }: ResolverContext
  ) {
    logger.debug(input, "creating player...");
    const response = await new PlayerService({ knex }).createPlayer(input);
    logger.debug(
      `${chalk.greenBright("Success!")} created player ${chalk.yellowBright(
        response[PlayersTableColumns.USERNAME]
      )}`
    );
    return response;
  }
}
