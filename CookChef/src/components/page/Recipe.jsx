import styled from "styled-components";
import { theme } from "../../theme";
import { useContext } from "react";
import { ApiContext } from "../../context/ApiContext";
export default function Recipe({ recipe: {
  _id, image, title, liked }, toggleLikedRecipes}) {

  //state 
const BASE_URL_API = useContext(ApiContext)


  //comportement 
const handleClick = async() => {
try{
  const response = fetch(`${BASE_URL_API}/${_id}`, {
    method: 'PATCH',
    headers : {
      'Content-Type' : 'application/json'
    },
    body: JSON.stringify({
      liked : !liked
    })
  });
  if(response.ok){
    const updatedRecipe = await response.json();
    toggleLikedRecipes(updatedRecipe)
    console.log(liked)
  }
}catch(e){
console.log('error',e)
}
}
  //render
  return (
    <RecipeStyled onClick={ handleClick}>
      <div className="imgContainer">
        <img src={image} alt="recipe" />
      </div>
      <div className="recipeTitle">
        <h3 className="titleRecipe">{title}</h3>
        <i className={` fa-regular fa-heart ${liked ? "text-primary" : ""}`}></i>
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
    cursor: pointer;
    img {
      transform: scale(1.1);
      
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
