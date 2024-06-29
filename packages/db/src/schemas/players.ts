import { Knex } from "knex";
import { Schema } from "../types";

/**
 * Players table containing information about the players of the salty-bets-night
 */
const tableName = "players";
export enum PlayersTableColumns {
  ID = "id",
  USERNAME = "username",
  PASSWORD = "password",
  BALANCE = "balance",
  IS_ADMIN = "isAdmin",
  LOGIN_TOKEN = "loginToken",
}

// Used to help type the table interface
type BaseTable = {
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any -- Typing ignored since this is an intermediary type used to help define the exported table schema
  [key in PlayersTableColumns]: any;
};

export interface PlayersTable extends BaseTable {
  [PlayersTableColumns.ID]: number;
  [PlayersTableColumns.USERNAME]: string;
  [PlayersTableColumns.PASSWORD]: string;
  [PlayersTableColumns.BALANCE]: number;
  [PlayersTableColumns.IS_ADMIN]: boolean;
  [PlayersTableColumns.LOGIN_TOKEN]: string;
}

export type PlayersTableWithoutPrivateInfo = Omit<
  PlayersTable,
  PlayersTableColumns.PASSWORD | PlayersTableColumns.LOGIN_TOKEN
>;

export const buildItemsTable = async (schema: Knex.SchemaBuilder) => {
  await schema.createTable(tableName, (table) => {
    // ID for the table
    table.increments();

    table.string(PlayersTableColumns.USERNAME);
    table.string(PlayersTableColumns.PASSWORD);
    table.float(PlayersTableColumns.BALANCE);
    table.boolean(PlayersTableColumns.IS_ADMIN);
    table.string(PlayersTableColumns.LOGIN_TOKEN);
  });
};

const defaultSchema: Schema = {
  tableName,
  columns: PlayersTableColumns,
  build: buildItemsTable,
};

export default defaultSchema;
