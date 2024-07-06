import { ApolloAppProvider } from "./apollo/provider";
import { Provider as RouterProvider } from "./routes/RouterProvider";

const App = () => {
  return (
    <>
      <ApolloAppProvider>
        <RouterProvider />
      </ApolloAppProvider>
    </>
  );
};

export default App;
