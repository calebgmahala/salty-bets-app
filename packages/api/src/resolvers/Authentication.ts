import { Args, Ctx, Mutation, Resolver } from "type-graphql";
import { Player } from "../dtos/Player";
import { ResolverContext } from "..";
import { LoginInput } from "../dtos/Authentication/Login";
import { logger } from "../../utils/logger";
import chalk from "chalk";
import { AuthenticationService } from "../../../db/src/sdk/Authentication";
import { PlayersTableColumns } from "../../../db/src/schemas/players";
import { GraphQLError } from "graphql";

@Resolver()
export class AuthenticationResolver {
  @Mutation(() => String)
  async login(
    @Args(() => LoginInput) input: LoginInput,
    @Ctx() { knex }: ResolverContext
  ) {
    logger.debug(input, "logging in...");
    const response = await new AuthenticationService({ knex }).login(input);
    if (response) {
      logger.debug(
        `${chalk.greenBright("Success!")} logged in player ${chalk.yellowBright(
          response[PlayersTableColumns.USERNAME]
        )}`
      );
      return response[PlayersTableColumns.LOGIN_TOKEN];
    } else {
      logger.debug(
        input,
        `${chalk.redBright("Failed")} to login player with given input`
      );
      throw new GraphQLError(
        "Login failed, please check your credentials and try again",
        {
          extensions: { code: "LOGIN_FAILED" },
        }
      );
    }
  }

  logout() {}
}
