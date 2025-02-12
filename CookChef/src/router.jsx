import { createBrowserRouter, redirect } from "react-router-dom";
import App from "./App";
import { lazy } from "react";
import { getRecipe } from "./apis";

// Lazy Content
const Homepage = lazy(() => import("./components/page/homePage/Content"));
// Lazy used to dont reload at the beginning the component
const Admin = lazy(() => import("./components/page/admin/Admin"));
const AdminRecipes = lazy(() =>
  import("./components/page/admin/pages/AdminRecipes/AdminRecipes")
);
const AdminUsers = lazy(() =>
  import("./components/page/admin/pages/AdminUsers/AdminUsers")
);
const AdminRecipesList = lazy(() =>
  import("./components/page/admin/pages/AdminRecipes/pages/AdminRecipesList/AdminRecipesList")
);
const AdminRecipesForm = lazy(() =>
  import("./components/page/admin/pages/AdminRecipes/pages/AdminRecipeForm/AdminRecipeForm")
);


// Router
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
        children: [
          {
            path: 'recipes',
            element: <AdminRecipes />,
            children: [
              {
                index: true,
                loader: async () => redirect("/admin/recipes/list"),
              },
              {
                path: "list",
                element: <AdminRecipesList />,
              },
              {path: 'new',
                element: <AdminRecipesForm/>
              },
              {
                path:'edit/:recipeId',
                loader: async ({params: {recipeId}}) => getRecipe(recipeId),
                element: <AdminRecipesForm/>
              }
            ],
          },
          {
            path: "users",
            element: <AdminUsers />,
          },
          {
            index: true,
            loader: async () => redirect("/admin/recipes"),
          },
        ],
      },
    ],
  },
]);
