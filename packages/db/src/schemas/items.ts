import { Knex } from "knex";
import { Schema } from "../types";

/**
 * Items table containing information about the items players can bet on
 */
const tableName = "items";
export enum ItemsTableColumns {
  ID = "id",
  NAME = "name",
  COLOR = "color",
}

// Used to help type the table interface
type BaseTable = {
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any -- Typing ignored since this is an intermediary type used to help define the exported table schema
  [key in ItemsTableColumns]: any;
};

export interface ItemsTable extends BaseTable {
  [ItemsTableColumns.ID]: number;
  [ItemsTableColumns.NAME]: string;
  [ItemsTableColumns.COLOR]: string;
}

export const buildItemsTable = async (schema: Knex.SchemaBuilder) => {
  await schema.createTable(tableName, (table) => {
    // ID for the table
    table.increments();

    table.string(ItemsTableColumns.NAME);
    table.string(ItemsTableColumns.COLOR);
  });
};

const defaultSchema: Schema = {
  tableName,
  columns: ItemsTableColumns,
  build: buildItemsTable,
};

export default defaultSchema;
