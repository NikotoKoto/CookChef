import React from "react";
import styled from "styled-components";
import Button from "../../../reusable-UI/Button";
import { theme } from "../../../../theme";
import Input from "../../../reusable-UI/Input";

export default function RecipeForm() {
  return (
    <RecipeFormStyled>
      <form className="contentForm">
        <div className="labelDiv">
          <label htmlFor="titleOfRecipe">Titre de la recette</label>
          <Input value="" type="text" id="titleOfRecipe"/>
        </div>
        <div className="labelDiv">
          <label htmlFor="imgToAdd">Ajouter une image </label>
          <Input className="inputImg" type ="text" id="imgToAdd" value="" />
        </div>
        {/* <p className="formError">Error</p> */}
        <Button value="Sauvegarder" />
      </form>
    </RecipeFormStyled>
  );
}
const RecipeFormStyled = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.white};
  border-radius: 15px;
  padding: 20px;
  width: 350px;
  height: auto;

  .contentForm {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .labelDiv {
    margin-bottom: 20px;

    label {
      color: ${theme.colors.greyMedium};
    }
  }

  .inputImg {
    width: 100px;
    height: 100px;
    border-radius: 5px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
