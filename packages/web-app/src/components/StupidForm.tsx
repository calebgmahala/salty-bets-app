import React from "react";
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
const useCreatePlayer = () =>
  useMutation<CreatePlayerMutation, MutationCreatePlayerArgs>(CREATE_USER);

export const StupidForm = () => {
  const [createPlayer] = useCreatePlayer();

  const [id, setId] = React.useState<number | undefined>(undefined);
  const [username, setPlayername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [balance, setBalance] = React.useState(0);

  const onFormSubmit = React.useCallback(() => {
    createPlayer({
      variables: {
        id,
        username,
        password,
        balance,
      },
    });
  }, [createPlayer, username, password, balance]);
  return (
    <>
      ID (optional){" "}
      <input
        type="number"
        value={id}
        onChange={(e) => setId(parseInt(e.target.value))}
      ></input>
      Playername{" "}
      <input
        type="text"
        value={username}
        onChange={(e) => setPlayername(e.target.value)}
      ></input>
      Password{" "}
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      Balance{" "}
      <input
        type="number"
        value={balance}
        onChange={(e) => setBalance(parseInt(e.target.value))}
      ></input>
      <button onClick={onFormSubmit}>Submit</button>
    </>
  );
};
