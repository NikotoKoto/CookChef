import React from "react";
import styled from "styled-components";
import Button from "../../../reusable-UI/Button";
import { theme } from "../../../../theme";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ApiContext } from "../../../../context/ApiContext";
import { useContext } from "react";
import Input from "../../../reusable-UI/Input";

export default function RecipeForm() {
  const BASE_URL_API = useContext(ApiContext);
  const defaultValues = {
    title: "",
    image: "",
  };

  const recipeSchema = yup.object({
    title: yup
      .string()
      .required("Title of recipe msut be assigned")
      .min(10, "title must be explicit")
      .max(30, "title must be shorter"),
    image: yup
      .string()
      .required("Need to assign an image")
      .url("Image must be a valid link  "),
  });

  const {
    formState: { errors, isSubmitting },
    register,
    handleSubmit,
    reset,
    setError,
    clearErrors,
  } = useForm({
    defaultValues,
    resolver: yupResolver(recipeSchema),
  });

  const submit = async (values) => {
    try {
      clearErrors();
      const response = await fetch(BASE_URL_API, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        reset(defaultValues);
      } else {
        setError("genereic", {
          type: "generic",
          message: "il y a eu une erreur",
        });
      }
    } catch (e) {
      setError("genereic", {
        type: "generic",
        message: "il y a eu une erreur",
      });
    }
  };

  return (
    <RecipeFormStyled>
      <form className="contentForm" onSubmit={handleSubmit(submit)}>
        <div className="labelDiv">
          <label htmlFor="titleOfRecipe">Titre de la recette</label>
          <Input
            {...register("title")}
            type="text"
            id="titleOfRecipe"
            className="input-p"
          />
        </div>
        {errors.title && <p className="formError">{errors.title.message}</p>}
        <div className="labelDiv">
          <label htmlFor="imgToAdd">Ajouter une image </label>
          <Input
            {...register("image")}
            className="input-p"
            type="text"
            id="imgToAdd"
          />
        </div>
        {errors.image && <p className="formError">{errors.image.message}</p>}

        {errors.generic && (
          <p className="formError">{errors.generic.message}</p>
        )}
        <Button disabled={isSubmitting} type="submit">
          <span>Sauvegarder</span>
        </Button>
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

  .input-p {
    padding-left: 5px;
  }
`;
