import { useCallback } from "react";
import { client } from "../apollo/provider";
import { useLogout } from "./useLogout.gql";

export const useAuthentication = () => {
  const authToken = localStorage.getItem("auth_token");
  const [doLogout] = useLogout()

  const setAuthToken = (token: string) => {
    localStorage.setItem("auth_token", token);
  };

  const logout = useCallback(() => {
    doLogout()
    localStorage.removeItem("auth_token")
    client.resetStore();
  }, [client]);

  const isLoggedIn = !!authToken;

  return {
    authToken,
    setAuthToken,
    logout,
    isLoggedIn
  }
};
