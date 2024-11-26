
import recipe from "../../assets/images/recipe-pot-au-feu.jpg"
import styled from "styled-components";
import { theme } from "../../theme";
export default function Recipe() {
  return (
    <RecipeStyled>
      <div className="imgContainer">
        <img src={recipe} alt="recipe" />
      </div>
      <div className="recipeTitle">
        <h3>Pot au feu</h3>
      </div>
    </RecipeStyled>
  );
}

const RecipeStyled = styled.div`
    border-radius: 20px;
    height: 500px;

    &:hover{
        img{
            transform: scale(1.1);
            cursor: pointer;
        }

        .recipeTitle{
            color: ${theme.colors.primary};
        }

        
    }

    &:active{
            transform: scale(0.95);
        }

    .imgContainer{
        height: 300px;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        overflow: hidden;
    }
    .imgContainer img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: 0.2s transform;
    }

    .recipeTitle{
        display: flex;
        height: 100px;
        justify-content: center;
        align-items: center;
        transition: 2ms color;
   
        border-bottom: 1px solid ${theme.colors.greyLight};
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
    }
`;
