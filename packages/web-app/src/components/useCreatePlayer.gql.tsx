import { useMutation, gql } from "@apollo/client";
import { CreatePlayerMutation, MutationCreatePlayerArgs } from "../gql/graphql";

const CREATE_USER = gql`
  mutation CreatePlayer(
    $id: Int
    $username: String!
    $password: String!
    $balance: Float
  ) {
    createPlayer(
      id: $id
      username: $username
      password: $password
      balance: $balance
    ) {
      id
    }
  }
`;
export const useCreatePlayer = () =>
  useMutation<CreatePlayerMutation, MutationCreatePlayerArgs>(CREATE_USER);
