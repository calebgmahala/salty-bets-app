import { Knex } from "knex";
import Players, { PlayersTable } from "../schemas/players";

/**
 * Seeds the database with a root admin user
 * @param knex The db connection
 */
export const seedRootAdmin = async (knex: Knex) => {
  const columns = Players.columns;
  await knex<PlayersTable>(Players.tableName).insert({
    [columns.ID]: null,
    [columns.USERNAME]: "admin",
    [columns.PASSWORD]: "root",
    [columns.BALANCE]: 0,
    [columns.IS_ADMIN]: true,
    [columns.LOGIN_TOKEN]: null,
  });
};
