import {
  Arg,
  FieldResolver,
  Int,
  Query,
  Resolver,
  ResolverInterface,
  Root,
} from "type-graphql";
import { logger } from "../../../utils/logger";
import chalk from "chalk";
import { Match } from "../../dtos/SaltyBets/Match";
import { SaltyBetsService } from "../../../utils/salty-boy/SaltyBetsService";

@Resolver(Match)
export class MatchResolver implements ResolverInterface<Match> {
  /**
   * Gets a match from the salty-boy api given an id
   * @param id id of the match to get
   * @returns the given match
   */
  @Query(() => Match)
  async getMatch(@Arg("id", () => Int) id: number) {
    logger.debug("getting match...");
    const match = await SaltyBetsService.getMatch(id);
    logger.info(
      `${chalk.greenBright("Success!")} got match ${chalk.yellowBright(
        match.id
      )}`
    );
    return match;
  }

  /**
   * Gets the blue fighter if requested
   * @returns the given fighter
   */
  @FieldResolver()
  async fighterBlue(@Root() match: Match) {
    return await SaltyBetsService.getFighter(match.fighterBlueId);
  }

  /**
   * Gets the red fighter if requested
   * @returns the given fighter
   */
  @FieldResolver()
  async fighterRed(@Root() match: Match) {
    return await SaltyBetsService.getFighter(match.fighterRedId);
  }

  /**
   * Gets the winning fighter if requested
   * @returns the given fighter
   */
  @FieldResolver()
  async winner(@Root() match: Match) {
    return await SaltyBetsService.getFighter(match.winnerId);
  }
}
