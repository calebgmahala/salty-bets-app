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
export const usePlayers = () => useQuery<PlayersQuery>(USERS);