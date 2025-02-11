import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import AdminRecipesNav from "./components/AdminRecipesNav/AdminRecipesNav";

export default function AdminRecipes() {
  return (
    <AdminRecipesStyled>
      <h3
      className="titleRecipesAdmin">Gestion des recettes</h3>
      <div className="container">
        <AdminRecipesNav/>
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
  align-items: center;
  justify-content: center;
  flex-direction: column;


  .titleRecipesAdmin{
    margin-bottom: 20px;
  }
  .containerOutlet {
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
  }

  .container{
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
  }
`;
