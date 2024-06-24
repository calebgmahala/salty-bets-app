import { Knex } from "knex";
import Items, { ItemsTable } from "../schemas/items";

/**
 * Seeds the database with the default items
 * @param knex The db connection
 */
export const seedBaseItems = async (knex: Knex) => {
  const columns = Items.columns;
  await Promise.all([
    knex<ItemsTable>(Items.tableName).insert({
      [columns.ID]: null,
      [columns.NAME]: "Blue",
      [columns.COLOR]: "#00adee",
    }),
    knex<ItemsTable>(Items.tableName).insert({
      [columns.ID]: null,
      [columns.NAME]: "Red",
      [columns.COLOR]: "#be1e2c",
    }),
  ]);
};
