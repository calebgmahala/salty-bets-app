import "reflect-metadata";
import { ApolloServer, BaseContext } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { buildSchema } from "type-graphql";
import { Resolvers } from "./resolvers";
import knex from "../../db/src/knexConnection";
import chalk from "chalk";
import {
  PlayersTable,
  PlayersTableColumns,
} from "../../db/src/schemas/players";
import { authChecker } from "../utils/auth";

export interface ResolverContext extends BaseContext {
  knex: typeof knex;
  user: {
    id: PlayersTable[PlayersTableColumns.ID];
    doesExist: boolean;
    isAdmin: PlayersTable[PlayersTableColumns.IS_ADMIN];
  };
}

async function bootstrap() {
  // Build GraphQL schema
  const schema = await buildSchema({
    resolvers: Resolvers,
    emitSchemaFile: true,
    authChecker,
  });

  // Create GraphQL server
  const server = new ApolloServer({ schema });

  // HMR hooks
  if (import.meta.hot) {
    // Before we reload the application, insure that we stop the server
    import.meta.hot.on("vite:beforeFullReload", async () => {
      console.log(
        `${chalk.grey(new Date().toLocaleTimeString())} ${chalk.cyan(
          "[vite]"
        )} ${chalk.green("server reload")}`
      );
      await server.stop();
    });
  }

  // Start server
  await startStandaloneServer(server, {
    listen: { port: 4000 },
    context: async () => {
      return { knex };
    },
  });
}

bootstrap();
