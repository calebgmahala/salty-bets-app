import { Knex } from "knex";

export interface Schema {
  tableName;
  columns: Record<string, string>;
  build: (schema: Knex.SchemaBuilder) => Promise<void>;
}
