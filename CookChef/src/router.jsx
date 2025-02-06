import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { lazy } from "react";
const Homepage = lazy(() => import("./components/page/homePage/Content"));
// Lazy used to dont reload at the beginning the component
const Admin = lazy(() => import("./components/page/admin/Admin"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "admin",
        element: <Admin />,
      },
    ],
  },
]);
