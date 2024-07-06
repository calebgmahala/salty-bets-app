import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ApolloAppProvider } from "./apollo/provider";
import { Index } from "./pages/Index";
import { Login } from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />
  },
  {
    path: "/login",
    element: <Login />
  }
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
