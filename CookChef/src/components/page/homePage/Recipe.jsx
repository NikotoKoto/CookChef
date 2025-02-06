/* eslint-disable react/prop-types */
import styled from "styled-components";
import { theme } from "../../../theme";
import { ImCross } from "react-icons/im";
export default function Recipe({
  recipe,
  updateRecipe,
  deleteRecipe,
}) {
  //state


  //comportement
  const handleClickLike = () => {
    updateRecipe ({
      ...recipe,
      liked: !recipe.liked
    })
  }

  const handleClickDelete = async (e) => {
    e.stopPropagation();
    deleteRecipe(recipe._id)
  }
  //render
  return (
    <RecipeStyled onClick={handleClickLike}>
      <div className="imgContainer">
        <img src={recipe.image} alt="recipe" />
      </div>
      <div
        className="deleteCross"
        onClick={(e) => {
          handleClickDelete(e);
        }}
      >
        <ImCross />
      </div>
      <div className="recipeTitle">
        <h3 className="titleRecipe">{recipe.title}</h3>
        <i
          className={` fa-regular fa-heart ${recipe.liked ? "text-primary" : ""}`}
        ></i>
      </div>
    </RecipeStyled>
  );
}

const RecipeStyled = styled.div`
  border-radius: 20px;
  height: 400px;
  position: relative;

  &:hover {
    cursor: pointer;
    img {
      transform: scale(1.1);
    }
  }

  .imgContainer {
    height: 300px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    overflow: hidden;
  }
  .imgContainer img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 2s transform;
  }

  .recipeTitle {
    display: flex;
    flex-direction: column;
    height: 100px;
    justify-content: center;
    align-items: center;
    transition: 2ms color;

    border-bottom: 1px solid ${theme.colors.greyLight};
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }
  .titleRecipe {
    margin-bottom: 10px;

    &:hover {
      color: ${theme.colors.primary};
    }
  }

  .text-primary {
    color: red;
  }
  .deleteCross {
    position: absolute;
    top: 15px;
    right: 15px;
    padding: 5px;
    display: flex;
    font-size: 10px;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary};
    border-radius: 20px;
    cursor: pointer;
    z-index: 1;
    transition: transform 0.2s, color 0.2s, background-color 0.2s;
    &:hover {
      transform: scale(1.2);
      color: ${theme.colors.white};
      background-color: ${theme.colors.primary};
    }
  }
`;
