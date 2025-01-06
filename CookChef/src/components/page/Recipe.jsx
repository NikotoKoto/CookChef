import styled from "styled-components";
import { theme } from "../../theme";
import { useState } from "react";
export default function Recipe({ image, title }) {

  //state 
const [liked, setLiked] = useState(false)
  //comportement 
const handleClick = () => {
setLiked(!liked)
}
  //render
  return (
    <RecipeStyled onClick={ handleClick}>
      <div className="imgContainer">
        <img src={image} alt="recipe" />
      </div>
      <div className="recipeTitle">
        <h3 className="titleRecipe">{title}</h3>
        <i className={`${liked ? "text-primary" : ""} fa-regular fa-heart `}></i>
      </div>
    </RecipeStyled>
  );
}

const RecipeStyled = styled.div`
  border-radius: 20px;
  height: 400px;

  i{
        font-size: 20px;
      }

  &:hover {
    img {
      transform: scale(1.1);
      cursor: pointer;
    }

    .recipeTitle {
      color: ${theme.colors.primary};

      
    }
  }

  &:active {
    transform: scale(0.95);
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
  .titleRecipe{
    margin-bottom: 10px;
  }

  .text-primary{
    color: red;
   
  }
`;
