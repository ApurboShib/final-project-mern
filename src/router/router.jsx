import { createBrowserRouter } from "react-router";
import Home from "../pages/home/Home";
import RootLayouts from "../layouts/RootLayouts";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayouts,
    children: [{ index: true, Component: Home }],
  },
]);
