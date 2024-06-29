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

/**
 * Authentication function to run on @Authenticated decorated query requests
 * @param param0 Context object containing the user login token and the db connection object
 * @param roles List of roles that the request expects the user to have
 * @returns Whether or not to allow the user to make the request
 */
export const authChecker: AuthChecker<ResolverContext, Roles> = async (
  { context: { knex, user } },
  roles
) => {
  // Fail auth if the user does not pass us a login token
  if (!user.loginToken) {
    logFailedToAuthenticateUserMessage(user.loginToken);
    return false;
  }

  // Get the user in the DB with the passed login token
  const foundUser = await new AuthenticationService({
    knex,
  }).findUserBasedOnToken(user.loginToken);

  // Fail auth if a user with the passed login token does not exist
  if (!foundUser) {
    logFailedToAuthenticateUserMessage(user.loginToken);
    return false;
  }

  // Fail auth if the query expects the user to be an admin and the found user is not an admin
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
