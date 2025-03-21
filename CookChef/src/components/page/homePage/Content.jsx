import styled from "styled-components";
import Recipe from "./Recipe";
import { useState } from "react";
import media from "../../../assets/styled/media";
import { theme } from "../../../theme";
import Loading from "../../layout/loading/Loading";
import {updateRecipe as updateR, deleteRecipe as deleteR} from "../../../apis"
import {  useFetchRecipes } from "../../../hooks/useFetchRecipe";
import Input from "../../reusable-UI/Input";

export default function Content() {
  //state
  const [filter, setFilter] = useState(""); // add feature to filter more items
  const [page, setPage] = useState(1); // add feature to render more products


  const { state, isLoading } = useFetchRecipes(page);
  const { recipe: recipes, setRecipe: setRecipes } = state;

  const updateRecipe = async(updatedRecipe) => {
    const savedRecipe = await updateR(updatedRecipe)
    setRecipes(
      recipes.map((r) => (r._id === savedRecipe._id ? savedRecipe : r))
    );
  
  };
  //Comportement
  const handleInput = (e) => {
    const filterValue = e.target.value;
    setFilter(filterValue.trim().toLowerCase());
  };

  const handleClickLoadMoreReceipes = () => {
    setPage(page + 1);
  };

  const deleteRecipe = async(_id) => {
   const deleteRecipeID=  await deleteR(_id)
    setRecipes((prevRecipes) => prevRecipes.filter((r) => r._id !==deleteRecipeID));
  };


  //render
  return (
    <ContentStyled>
      <h1 className="titleContent">
        Découvres nos nouvelles recettes{" "}
        <small className="small-recipes">-{recipes.length}</small>
      </h1>

      <div className="container">
        <div className="searchBar">
          <i className="fa-solid fa-magnifying-glass iconSearch"></i>
          <Input onInput={handleInput} placeholder="Rechercher"/>
                  </div>

        {isLoading && !recipes.length ? (
          <Loading />
        ) : (
          <div className="cards-Container">
            {recipes
              .filter((r) => r.title.toLowerCase().startsWith(filter))
              .map((r) => (
                <Recipe
                  key={r._id}
                  recipe={r}
                  updateRecipe={updateRecipe}
                  deleteRecipe={deleteRecipe}
                />
              ))}
          </div>
        )}
        <div className="moreRecipes">
          <button className="btn-more" onClick={handleClickLoadMoreReceipes}>
            Charger plus de recette
          </button>
        </div>
      </div>
    </ContentStyled>
  );
}

const ContentStyled = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  align-items: center;
  width: 100%;
  margin: auto;
  padding: 20px;
  background-color: ${theme.colors.greyLight};

  .container {
    display: flex;
    padding: 10px 15px;
    margin: 30px 0 30px 0;
    gap: 5px;
    flex-direction: column;

    align-items: center;
    border: 1px solid ${theme.colors.greyLight};
    border-radius: 20px;
    background-color: ${theme.colors.white};

    ::placeholder {
      font-family: ${theme.fonts.family.normal};
    }
  }

  .titleContent {
    margin-bottom: 30px;
    margin-top: 30px;

    font-family: ${theme.fonts.family.normal};
  }

  .cards-Container {
    display: grid;
    grid-template-columns: repeat(3, 350px);
    grid-auto-columns: repeat(3, 350px);
    gap: 20px;
    place-content: center;
    border-radius: 20px;

    padding: 20px;

    ${media.md(`
   grid-template-columns: repeat(2,350px);
    grid-auto-columns: repeat(2,350px);
  `)}

    ${media.sm(`
   grid-template-columns: repeat(1,350px);
    grid-auto-columns: repeat(1,350px);
  `)}

${media.xs(`
   grid-template-columns: 1fr;
    grid-auto-columns: 1fr;
  `)}
  }
  .iconSearch {
    font-size: 15px;
  }

  .searchBar {
    display: flex;
    width: 100%;
    flex-direction: row;
    gap: 10px;
    padding: 15px;
    border: 1px solid ${theme.colors.greyLight};
    border-radius: 20px;

    input {
      outline: none;
      border: 0;
      font-family: ${theme.fonts.family.normal};
      width: 100%;
    }
  }

  .moreRecipes {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
  }
  .btn-more {
    padding: 10px;
    border-radius: 20px;
    border: none;
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    cursor: pointer;
    transition: background-color 0.5s, color 0.5s, border 0.5s;

    &:hover {
      background-color: ${theme.colors.white};
      color: ${theme.colors.primary};
      border: 1px solid ${theme.colors.primary};
    }
  }

  .small-recipes {
    font-size: 15px;
    color: ${theme.colors.text};
  }
`;
