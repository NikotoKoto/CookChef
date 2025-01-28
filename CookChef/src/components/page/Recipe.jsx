/* eslint-disable react/prop-types */
import styled from "styled-components";
import { theme } from "../../theme";
import { useContext } from "react";
import { ApiContext } from "../../context/ApiContext";
import { ImCross } from "react-icons/im";
export default function Recipe({
  recipe: { _id, image, title, liked },
  toggleLikedRecipes,
  deleteRecipe,
}) {
  //state
  const BASE_URL_API = useContext(ApiContext);

  //comportement
  const handleClickLike = async () => {
    try {
      const response = fetch(`${BASE_URL_API}/${_id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          liked: !liked,
        }),
      });
      if (response.ok) {
        const updatedRecipe = await response.json();
        toggleLikedRecipes(updatedRecipe);
        console.log(liked);
      }
    } catch (e) {
      console.log("error", e);
    }
  };

  const handleClickDelete = async (e) => {
    e.stopPropagation();
    try {
      const response = await fetch(`${BASE_URL_API}/${_id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        deleteRecipe(_id);
      }
    } catch {
      console.log("error", e);
    }
  };

  //render
  return (
    <RecipeStyled onClick={handleClickLike}>
      <div className="imgContainer">
        <img src={image} alt="recipe" />
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
        <h3 className="titleRecipe">{title}</h3>
        <i
          className={` fa-regular fa-heart ${liked ? "text-primary" : ""}`}
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
