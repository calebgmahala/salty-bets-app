import { AuthChecker } from "type-graphql";
import { ResolverContext } from "../src";
import { AuthenticationService } from "../../db/src/sdk/Authentication";
import { logger } from "./logger";
import chalk from "chalk";
import { PlayersTableColumns } from "../../db/src/schemas/players";

export enum Roles {
  ADMIN = "ADMIN",
}

const logFailedToAuthenticateUserMessage = (token) =>
  logger.debug({ token }, `${chalk.redBright("Failed")} to authenticate user}`);

export const authChecker: AuthChecker<ResolverContext, Roles> = async (
  { context: { knex, user } },
  roles
) => {
  if (!user.loginToken) {
    logFailedToAuthenticateUserMessage(user.loginToken);
    return false;
  }
  const foundUser = await new AuthenticationService({
    knex,
  }).findUserBasedOnToken(user.loginToken);

  if (!foundUser) {
    logFailedToAuthenticateUserMessage(user.loginToken);
    return false;
  }

  if (roles.includes(Roles.ADMIN)) {
    if (!foundUser[PlayersTableColumns.IS_ADMIN]) {
      logFailedToAuthenticateUserMessage(user.loginToken);
      return false;
    }
  }

  logger.debug(
    `${chalk.greenBright("Success!")} authenticated user ${chalk.yellowBright(
      foundUser[PlayersTableColumns.USERNAME]
    )}`
  );

  return true;
};
