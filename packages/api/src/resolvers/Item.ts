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
  /**
   * Gets a list of all the items
   * @returns the list of all items in the DB
   */
  @Query(() => [Item])
  async items(@Ctx() { knex }: ResolverContext) {
    logger.debug("getting items...");
    const response = await new ItemService({ knex }).getItems();
    logger.info(
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
      logger.info(
        `${chalk.greenBright("Success!")} got ${chalk.yellowBright(
          response[ItemsTableColumns.NAME]
        )}`
      );
    } else {
      logger.error(
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
      logger.info(
        `${chalk.greenBright("Success!")} created item ${chalk.yellowBright(
          response[ItemsTableColumns.NAME]
        )}`
      );
      return response;
    } catch (err) {
      logger.error(
        input,
        `${chalk.redBright("Failed")} to create item with given input`
      );
      throw new GraphQLError("Failed to create user with the given input", {
        extensions: { code: "INTERNAL_SERVER_ERROR" },
      });
    }
  }
}
