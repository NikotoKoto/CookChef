import React from "react";
import styled from "styled-components";
import Button from "../../../../../../reusable-UI/Button"
import { useFetchRecipes } from "../../../../../../../hooks/useFetchRecipe";
import { theme } from "../../../../../../../theme";
export default function AdminRecipesList() {
  // state
  const { state } = useFetchRecipes();
  const { recipe: recipes } = state;

  // Comportement
  return (
    <AdminRecipesListStyled>
      {recipes.length
        ? recipes.map((recipe) => <li key={recipe._id}><span className="span-container">{recipe.title}</span>
        
          <Button className="btn-edit"><span>Editer</span></Button>
          <Button className="btn-danger"><span>Supprimer</span></Button>

     </li>)
        : null}
    </AdminRecipesListStyled>
  );
}

const AdminRecipesListStyled = styled.div`
  display: flex;
  flex: 1 1 auto;
  justify-content: center;
  flex-direction: column;
  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 0px;
    border-bottom: 1px solid grey;
    list-style: none;
  }

  .span-container{
    display: flex;
    gap: 20px;
    flex: 1 1 auto
  }

  .btn-danger{
    background-color: red;
    border: 2px solid transparent;
    border-radius: 3px;
    margin-left: 20px;
  }
  .btn-edit{
    background-color: green;
    border: 2px solid transparent;
    border-radius: 3px;

  }

  .btn-danger:hover, .btn-edit:hover{
      border: 2px solid white;
      color: white;
     
    }
`;
