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

  @FieldResolver()
  async fighterBlue(@Root() match: Match) {
    return await SaltyBetsService.getFighter(match.fighterBlueId);
  }

  @FieldResolver()
  async fighterRed(@Root() match: Match) {
    return await SaltyBetsService.getFighter(match.fighterRedId);
  }

  @FieldResolver()
  async winner(@Root() match: Match) {
    return await SaltyBetsService.getFighter(match.winnerId);
  }
}
