import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../../../../../theme";

export default function AdminRecipesNav() {
  return (
    <AdminRecipesStyled>
      <NavLink
        to="list"
        className={({ isActive }) =>
          isActive ? "NavLinkActive" : "NavlinkStyle"
        }
      >
        Liste des Recettes
      </NavLink>
      <NavLink
        to="new"
        className={({ isActive }) =>
          isActive ? "NavLinkActive" : "NavlinkStyle"
        }
      >
        Ajouter une recette
      </NavLink>
    </AdminRecipesStyled>
  );
}

const AdminRecipesStyled = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  padding-bottom: 50px;
  .NavlinkStyle {
    text-decoration: none;
    padding: 10px;
    border: 2px solid transparent;

    color: ${theme.colors.greyDark};

    &:hover {
      border-color: ${theme.colors.white};
    }
  }

  .NavLinkActive {
    text-decoration: none;
    padding: 10px;
    border: 2px solid ${theme.colors.primary};
    color: ${theme.colors.primary};
  }
`;
