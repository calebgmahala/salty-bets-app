import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ApolloAppProvider } from "./apollo/provider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div className="text-3xl font-bold underline">Hello world!</div>,
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
