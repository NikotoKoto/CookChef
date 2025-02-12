import styled from "styled-components";
import { useFetchRecipes } from "../../../../../../../hooks/useFetchRecipe";
import { theme } from "../../../../../../../theme";
import { deleteRecipe as deleteR } from "../../../../../../../apis";
import { NavLink } from "react-router-dom";
export default function AdminRecipesList() {
  // state
  
  const { state } = useFetchRecipes();
  const { recipe: recipes,
    setRecipe: setRecipes
   } = state;

  // Comportement
  const deleteRecipe = async(_id) => {
    await deleteR(_id);
    setRecipes(recipes.filter((r) => r._id !== _id))
  }


  return (
    <AdminRecipesListStyled>
      {recipes.length
        ?( recipes.map((recipe) => <li key={recipe._id}><span className="span-container">{recipe.title}</span>
        
          <NavLink to={`../edit/${recipe._id}`}>
          <button className="btn-edit">Editer</button>
          </NavLink>
          <button  onClick={() => deleteRecipe(recipe._id)} className="btn-danger">Supprimer</button>

     </li>))
        :( <p> Pas de recette disponible</p>)}
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

  .btn-danger, .btn-edit{
  
    padding: 10px ;
    border: 2px solid transparent;
    border-radius: 3px;
    margin-left: 20px;
    color: ${theme.colors.white};
    cursor: pointer;
  }
  .btn-edit{
    background-color: green;
  }
  .btn-danger{
    background-color: red;
  }

  .btn-danger:hover, .btn-edit:hover{
      border: 2px solid white;
      
      color: white;
     
    }
    
`;
