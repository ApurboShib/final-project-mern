import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import RootLayouts from "../layouts/RootLayouts";
import AuthLayout from "../AuthLayout/AuthLayout";
import Login from "../pages/Authentication/Login/Login";
import Register from "../pages/Authentication/Login/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayouts,
    children: [{ index: true, Component: Home }],
  },
  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
    ],
  },
]);
