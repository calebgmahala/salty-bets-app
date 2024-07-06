import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "../pages/Login";
import { Index } from "./Index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export const Provider = () => <RouterProvider router={router} />