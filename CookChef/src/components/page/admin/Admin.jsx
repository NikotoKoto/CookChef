import styled from "styled-components";
import RecipeForm from "./RecipeForm/RecipeForm";
import { theme } from "../../../theme";

export default function Admin() {
  return (
    <AdminStyled>
      <h1>Welcome to your Panel Admin</h1>
      <h3> What do you need to add ?</h3>
      <RecipeForm />
    </AdminStyled>
  );
}

const AdminStyled = styled.div`
  display: flex;
  align-items: center;
  padding-top: 20px;
  flex-direction: column;
  flex: 1;
  gap: 20px;
  background-color: ${theme.colors.greyLight};

`;
