import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../../theme";

export default function AdminNav() {
  return (
    <AdminNavStyled>
      <ul className="adminNavUl">
        <NavLink className={} to="recipes">Recipes</NavLink>
        <NavLink className={} to="users">Users</NavLink>
      </ul>
    </AdminNavStyled>
  );
}

const AdminNavStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 50px;

  .adminNavUl {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
    .adminNavUl,
    a {
      text-decoration: none;
      color: ${theme.colors.white};
      padding: 10px;
      cursor: pointer;
      border-radius: 20px;
      background-color: ${theme.colors.primary};
      transition: background-color 0.2s, border 0.2s, color 0.2s;

      &:hover {
        background-color: ${theme.colors.white};
        border: 1px solid ${theme.colors.primary};
        color: ${theme.colors.primary};
      }
    }
  }
`;
