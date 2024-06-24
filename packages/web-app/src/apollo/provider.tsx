import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});

export const ApolloAppProvider = ({ children }: React.PropsWithChildren) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
