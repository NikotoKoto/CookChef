import React from "react";
import { Outlet } from "react-router-dom";

export default function AdminRecipes() {
  return (
    <div>
      <h3>Admin Recipes</h3>
      <Outlet />
    </div>
  );
}
