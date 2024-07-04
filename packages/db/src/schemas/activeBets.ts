import { Knex } from "knex";
import { Players, Items } from ".";
import { Schema } from "../types";

/**
 * bets table containing information about the bets that have been placed over the course of the salty-bets night
 */
const tableName = "active_bets";
export enum ActiveBetsTableColumns {
  ID = "id",
  PLAYER_ID = "playerId",
  ITEM_ID = "itemId",
  VALUE = "value",
}
export const allActiveBetsTableColumns = Object.values(ActiveBetsTableColumns);

// Used to help type the table interface
type BaseTable = {
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any -- Typing ignored since this is an intermediary type used to help define the exported table schema
  [key in ActiveBetsTableColumns]: any;
};

export interface ActiveBetsTable extends BaseTable {
  [ActiveBetsTableColumns.ID]: number;
  [ActiveBetsTableColumns.PLAYER_ID]: number;
  [ActiveBetsTableColumns.ITEM_ID]: number;
  [ActiveBetsTableColumns.VALUE]: number;
}

export const buildItemsTable = async (schema: Knex.SchemaBuilder) => {
  await schema
    .createTable(tableName, (table) => {
      // ID for the table
      table.increments();

      table.float(ActiveBetsTableColumns.VALUE);

      // Foreign key columns
      table
        .string(ActiveBetsTableColumns.PLAYER_ID)
        .references(Players.columns.ID)
        .inTable(Players.tableName);
      table
        .string(ActiveBetsTableColumns.ITEM_ID)
        .references(Items.columns.ID)
        .inTable(Items.tableName);
    })
    .catch((err) => {
      throw err;
    });
};

const defaultSchema: Schema = {
  tableName,
  columns: ActiveBetsTableColumns,
  build: buildItemsTable,
};

export default defaultSchema;
