import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import AdminRecipesNav from "./components/AdminRecipesNav/AdminRecipesNav";

export default function AdminRecipes() {
  return (
    <AdminRecipesStyled>
      <div className="titleRecipesAdmin">
      <h3 className="titleRecipesAdmin">Gestion des recettes</h3>

      </div>
      <div className="container">
        <AdminRecipesNav />
        <div className="containerOutlet">
          <Suspense>
            <Outlet />
          </Suspense>
        </div>
      </div>
    </AdminRecipesStyled>
  );
}

const AdminRecipesStyled = styled.div`
  padding: 20px;
  display: flex;

  flex-direction: column;

  .titleRecipesAdmin {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }
  .containerOutlet {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1 1 auto;
    flex-direction: column;
  }

  .container {
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
  }
`;
