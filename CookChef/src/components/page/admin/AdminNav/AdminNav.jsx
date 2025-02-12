import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../../theme";

export default function AdminNav() {
  return (
    <AdminNavStyled>
      <NavLink className={({isActive}) => isActive ? 'listLinkActive' : ''} to="recipes">
        Recipes
      </NavLink>
      <NavLink className={({isActive}) => isActive ? 'listLinkActive' : ''} to="users">
        Users
      </NavLink>
    </AdminNavStyled>
  );
}

const AdminNavStyled = styled.ul`
 display: flex;
 box-shadow: 4px 0 10px rgba(0, 0, 0, 0.2);
  flex: 0 0 200px;
  gap: 10px;
  display: flex;
  flex-direction: column;

    
    a {
      display: flex;
      justify-content: center;
      text-decoration: none;
      color: ${theme.colors.primary};
      padding: 10px;
      width: 100%;
      cursor: pointer;
      background-color: ${theme.colors.white};
      

    
    }

    .listLinkActive {
        background-color: ${theme.colors.primary};
        border: 1px solid ${theme.colors.primary};
        color: ${theme.colors.white};
      }
  
`;
