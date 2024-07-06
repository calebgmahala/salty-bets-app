import { useMutation, gql } from "@apollo/client";
import { LoginMutation, MutationLoginArgs } from "../../gql/graphql";

const LOGIN = gql`
  mutation Login(
    $username: String!
    $password: String!
  ) {
    login(
      username: $username
      password: $password
    )
  }
`;
export const useLogin = () =>
  useMutation<LoginMutation, MutationLoginArgs>(LOGIN);
