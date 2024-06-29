# DB

For more information about how this package integrates with the main app, please reference the top level app README

What should not be in here:

- Logic used outside of formatting db calls or collecting db from the data
- API calls

## Directory Structure

### scripts

Various one off scripts mainly for db creation / seeding / mutations

### src/schemas

Table schemas including typescript types for columns and data types, create table commands, and other db structure related items.

New schemas should export a default object of the type `Schema` interface found in [src/types.ts](src/types.ts). New Schema's also need added to the [src/schemas/index.ts](src/schemas/index.ts) file to insure that db initializer scripts can properly loop over all the schemas

### src/seeds

Functions used specifically to seed the database with initial values

### src/sdk

Services / functions used by the api to run specific db commands. Services should extend the `Service` Class found in [src/types.ts](src/types.ts)

## Installation

should be covered by the root installation. If your db is not automatically created after installation, run the following script to get the DB spun up

```bash
npm run build
```

## Tests

Currently no tests have been build for this package

## Relevant Scripts

Builds the DB based on the defined schema's and seeds it. Command will skip if the DB already exists

```bash
npm run build
```

Removes the current DB (run with caution)

```bash
npm run delete
```

Resets the DB (run with caution)

```bash
npm run reset
```
