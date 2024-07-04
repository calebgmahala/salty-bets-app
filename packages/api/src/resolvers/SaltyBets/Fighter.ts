import { Arg, Int, Query, Resolver } from "type-graphql";
import { Fighter } from "../../dtos/SaltyBets/Fighter";
import { logger } from "../../../utils/logger";
import chalk from "chalk";
import { SaltyBetsService } from "../../../utils/salty-boy/SaltyBetsService";

@Resolver(Fighter)
export class FighterResolver {
  @Query(() => Fighter)
  async getFighter(@Arg("id", () => Int) id: number) {
    logger.debug("getting fighter...");
    const fighter = await SaltyBetsService.getFighter(id);
    logger.info(
      `${chalk.greenBright("Success!")} got fighter ${chalk.yellowBright(
        fighter.name
      )}`
    );
    return fighter;
  }
}
