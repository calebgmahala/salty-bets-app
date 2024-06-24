import { createRoot } from "react-dom/client";
import { ApolloAppProvider } from "./apollo/provider";
import { StupidForm } from "./components/StupidForm";
import { StupidPlayers } from "./components/StupidPlayers";

const root = createRoot(document.body);
root.render(
  <ApolloAppProvider>
    <StupidPlayers />
    <StupidForm />
  </ApolloAppProvider>
);
