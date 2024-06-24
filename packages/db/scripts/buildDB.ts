import { Knex } from "knex";
import knex from "../src/knexConnection";
import * as Schemas from "../src/schemas";
import { seedBaseItems } from "../src/seeds/basicItems";
import { seedRootAdmin } from "../src/seeds/rootAdminUser";
import chalk from "chalk";

const main = async (knex: Knex) => {
  try {
    // We only want to build and seed the db if it doesn't already exist
    if (await knex.schema.hasTable(Schemas.Players.tableName)) {
      console.info(chalk.yellowBright("DB exists, skipping build"));
      process.exit(0);
    }

    console.info("Creating tables...");
    // Loop over all available schemas and build them
    await Promise.all(
      Object.values(Schemas).map((table) => {
        table.build(knex.schema);
      })
    );
    console.info(chalk.greenBright("Tables created"));

    console.info("Seeding tables...");
    await Promise.all([seedBaseItems(knex), seedRootAdmin(knex)]);
    console.info(chalk.greenBright("Tables seeded"));

    console.info(chalk.greenBright("Success!"));
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

main(knex);
