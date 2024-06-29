import { Knex } from "knex";

/**
 * Default export for items within the schema directory. These items are looped over when building out the DB initially
 */
export interface Schema {
  tableName;
  columns: Record<string, string>;
  build: (schema: Knex.SchemaBuilder) => Promise<void>;
}

/**
 * Default service class for items within the sdk directory. These classes are initialized from the API to call certain DB functions
 */
export interface ServiceArgs {
  knex: Knex;
}
export class Service {
  knex: Knex;
  constructor({ knex }: ServiceArgs) {
    this.knex = knex;
  }
}
