import { useMutation, gql } from "@apollo/client";
import { LogoutMutation, LogoutMutationVariables } from "../gql/graphql";

const LOGOUT = gql`
  mutation Logout {
    logout {
      id
    }
  }
`;
export const useLogout = () =>
  useMutation<LogoutMutation, LogoutMutationVariables>(LOGOUT);
