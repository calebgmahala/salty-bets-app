import React from "react";
import { gql, useQuery } from "@apollo/client";
import { PlayersQuery } from "../gql/graphql";

const USERS = gql`
  query Players {
    players {
      id
      username
      balance
      isAdmin
    }
  }
`;
const usePlayers = () => useQuery<PlayersQuery>(USERS);
export const StupidPlayers = () => {
  const { data, refetch } = usePlayers();
  return (
    <div>
      {data?.players?.map(({ id, username, balance, isAdmin }) => (
        <div>
          <span>ID: {id}</span>
          <span>Username: {username}</span>
          <span>Balance: {balance}</span>
          <span>Is Admin: {isAdmin}</span>
        </div>
      ))}
      <button onClick={
        () => refetch()
        }>refetch</button>
    </div>
  );
};
