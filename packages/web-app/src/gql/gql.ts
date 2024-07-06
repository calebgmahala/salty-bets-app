/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation Login(\n    $username: String!\n    $password: String!\n  ) {\n    login(\n      username: $username\n      password: $password\n    )\n  }\n": types.LoginDocument,
    "\n  mutation CreatePlayer(\n    $id: Int\n    $username: String!\n    $password: String!\n    $balance: Float\n  ) {\n    createPlayer(\n      id: $id\n      username: $username\n      password: $password\n      balance: $balance\n    ) {\n      id\n    }\n  }\n": types.CreatePlayerDocument,
    "\n  query Players {\n    players {\n      id\n      username\n      balance\n      isAdmin\n    }\n  }\n": types.PlayersDocument,
    "\n  mutation Logout {\n    logout {\n      id\n    }\n  }\n": types.LogoutDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation Login(\n    $username: String!\n    $password: String!\n  ) {\n    login(\n      username: $username\n      password: $password\n    )\n  }\n"): (typeof documents)["\n  mutation Login(\n    $username: String!\n    $password: String!\n  ) {\n    login(\n      username: $username\n      password: $password\n    )\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreatePlayer(\n    $id: Int\n    $username: String!\n    $password: String!\n    $balance: Float\n  ) {\n    createPlayer(\n      id: $id\n      username: $username\n      password: $password\n      balance: $balance\n    ) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation CreatePlayer(\n    $id: Int\n    $username: String!\n    $password: String!\n    $balance: Float\n  ) {\n    createPlayer(\n      id: $id\n      username: $username\n      password: $password\n      balance: $balance\n    ) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Players {\n    players {\n      id\n      username\n      balance\n      isAdmin\n    }\n  }\n"): (typeof documents)["\n  query Players {\n    players {\n      id\n      username\n      balance\n      isAdmin\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation Logout {\n    logout {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation Logout {\n    logout {\n      id\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;