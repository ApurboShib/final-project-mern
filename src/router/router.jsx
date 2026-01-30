import { createBrowserRouter } from "react-router";
import Home from "../pages/home/Home";
import RootLayouts from "../layouts/RootLayouts";
import AuthLayout from "../AuthLayout/AuthLayout";
import { Component } from "react";
import Login from "../pages/Authentication/Login/Login";

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
    ],
  },
]);
