import { Arg, Args, Ctx, Int, Mutation, Query, Resolver } from "type-graphql";
import { Item } from "../dtos/Item";
import { ItemService } from "../../../db/src/sdk/Item";
import { ResolverContext } from "..";
import { CreateItemInput } from "../dtos/Item/CreateItem";
import chalk from "chalk";
import { logger } from "../../utils/logger";
import { ItemsTableColumns } from "../../../db/src/schemas/items";
import { GraphQLError } from "graphql";

@Resolver(Item)
export class ItemResolver {
  @Query(() => [Item])
  async items(@Ctx() { knex }: ResolverContext) {
    logger.debug("getting items...");
    const response = await new ItemService({ knex }).getItems();
    logger.debug(
      `${chalk.greenBright("Success!")} got ${chalk.yellowBright(
        response.length
      )} items`
    );
    return response;
  }

  @Query(() => Item)
  async item(
    @Arg("id", () => Int) id: number,
    @Ctx() { knex }: ResolverContext
  ) {
    logger.debug({ id }, "getting item...");
    const response = await new ItemService({ knex }).getItem(id);
    if (response) {
      logger.debug(
        `${chalk.greenBright("Success!")} got ${chalk.yellowBright(
          response[ItemsTableColumns.NAME]
        )}`
      );
    } else {
      logger.debug(
        `${chalk.redBright(
          "Failed"
        )} to find item with id:  ${chalk.yellowBright(id)}`
      );
      throw new GraphQLError("Failed to find item with the given id", {
        extensions: { code: "INTERNAL_SERVER_ERROR" },
      });
    }

    return response;
  }

  @Mutation(() => Item)
  async createItem(
    @Args(() => CreateItemInput) input: CreateItemInput,
    @Ctx() { knex }: ResolverContext
  ) {
    logger.debug(input, "creating item...");
    try {
      const response = await new ItemService({ knex }).createItem(input);
      logger.debug(
        `${chalk.greenBright("Success!")} created item ${chalk.yellowBright(
          response[ItemsTableColumns.NAME]
        )}`
      );
      return response;
    } catch (err) {
      logger.debug(
        input,
        `${chalk.redBright("Failed")} to create item with given input`
      );
      throw new GraphQLError("Failed to create user with the given input", {
        extensions: { code: "INTERNAL_SERVER_ERROR" },
      });
    }
  }
}
