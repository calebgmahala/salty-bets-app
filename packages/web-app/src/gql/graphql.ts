/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.This scalar is serialized to a string in ISO 8601 format and parsed from a string in ISO 8601 format. */
  DateTimeISO: { input: any; output: any; }
};

/** The color options returned by the salty-boy api */
export enum Color {
  Blue = 'BLUE',
  Red = 'RED'
}

export type Fighter = {
  __typename?: 'Fighter';
  bestStreak: Scalars['Int']['output'];
  createdTime: Scalars['DateTimeISO']['output'];
  elo: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  lastUpdated: Scalars['DateTimeISO']['output'];
  name: Scalars['String']['output'];
  prevTier: Tier;
  tier: Tier;
  tierElo: Scalars['Int']['output'];
};

export type Item = {
  __typename?: 'Item';
  color?: Maybe<Scalars['String']['output']>;
  id: Scalars['Float']['output'];
  name: Scalars['String']['output'];
};

export type Match = {
  __typename?: 'Match';
  betBlue: Scalars['Float']['output'];
  betRed: Scalars['Float']['output'];
  colour: Color;
  date: Scalars['DateTimeISO']['output'];
  fighterBlue: Fighter;
  fighterBlueId: Scalars['Int']['output'];
  fighterRed: Fighter;
  fighterRedId: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  matchFormat: MatchType;
  streakBlue: Scalars['Int']['output'];
  streakRed: Scalars['Int']['output'];
  tier: Tier;
  winner: Fighter;
  winnerId: Scalars['Int']['output'];
};

/** The type of match being played */
export enum MatchType {
  Exhibition = 'EXHIBITION',
  Matchmaking = 'MATCHMAKING',
  Tournament = 'TOURNAMENT'
}

export type Mutation = {
  __typename?: 'Mutation';
  createItem: Item;
  createPlayer: Player;
  login: Scalars['String']['output'];
  logout: Player;
};


export type MutationCreateItemArgs = {
  color?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
};


export type MutationCreatePlayerArgs = {
  balance?: InputMaybe<Scalars['Float']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type Player = {
  __typename?: 'Player';
  balance: Scalars['Float']['output'];
  id: Scalars['Float']['output'];
  isAdmin: Scalars['Boolean']['output'];
  username: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  getFighter: Fighter;
  getMatch: Match;
  item: Item;
  items: Array<Item>;
  player: Player;
  players: Array<Player>;
};


export type QueryGetFighterArgs = {
  id: Scalars['Int']['input'];
};


export type QueryGetMatchArgs = {
  id: Scalars['Int']['input'];
};


export type QueryItemArgs = {
  id: Scalars['Int']['input'];
};


export type QueryPlayerArgs = {
  id: Scalars['Int']['input'];
};

/** The Tier of the match or of a fighter */
export enum Tier {
  A = 'A',
  B = 'B',
  P = 'P',
  S = 'S',
  X = 'X'
}

export type LoginMutationVariables = Exact<{
  username: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: string };

export type CreatePlayerMutationVariables = Exact<{
  id?: InputMaybe<Scalars['Int']['input']>;
  username: Scalars['String']['input'];
  password: Scalars['String']['input'];
  balance?: InputMaybe<Scalars['Float']['input']>;
}>;


export type CreatePlayerMutation = { __typename?: 'Mutation', createPlayer: { __typename?: 'Player', id: number } };

export type PlayersQueryVariables = Exact<{ [key: string]: never; }>;


export type PlayersQuery = { __typename?: 'Query', players: Array<{ __typename?: 'Player', id: number, username: string, balance: number, isAdmin: boolean }> };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: { __typename?: 'Player', id: number } };


export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}]}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const CreatePlayerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreatePlayer"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"balance"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPlayer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}},{"kind":"Argument","name":{"kind":"Name","value":"balance"},"value":{"kind":"Variable","name":{"kind":"Name","value":"balance"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreatePlayerMutation, CreatePlayerMutationVariables>;
export const PlayersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Players"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"players"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"balance"}},{"kind":"Field","name":{"kind":"Name","value":"isAdmin"}}]}}]}}]} as unknown as DocumentNode<PlayersQuery, PlayersQueryVariables>;
export const LogoutDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Logout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<LogoutMutation, LogoutMutationVariables>;