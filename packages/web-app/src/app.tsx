import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ApolloAppProvider } from "./apollo/provider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);

const App = () => {
  return (
    <>
      <ApolloAppProvider>
      <RouterProvider router={router} />
      </ApolloAppProvider>
    </>
  );
}

export default App;
