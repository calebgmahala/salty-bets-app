import { useCallback, useState } from "react";
import { Button } from "../../stories/Button";
import { useAuthentication } from "../../hooks/useAuthentication";
import { useLogin } from "./useLoginForm.gql";

export const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [login] = useLogin();
  const { logout, setAuthToken } = useAuthentication();

  const onSubmit = useCallback(() => {
    login({
      variables:{
        username,
        password
      },
      onCompleted: ({login}) => {
        setAuthToken(login)
      }
    })
  }, [username, password, setAuthToken]);
  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      ></input>
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <Button onClick={onSubmit}>Submit</Button>
      <Button onClick={logout}>Logout</Button>
    </div>
  );
};
