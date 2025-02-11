import styled from "styled-components";
import { theme } from "../../../theme";
import { NavLink } from "react-router-dom";

export default function HeaderMenu() {
  return (
    <HeaderMenuStyled>
      <li><NavLink className="no-underline" to="/admin">
      Admin
        </NavLink></li>
      <li>Whislist</li>
      <li>Log in</li>
    </HeaderMenuStyled>
  );
}

const HeaderMenuStyled = styled.ul`
  position: absolute;
  top: 68px;
  right: 10px;
  width: 200px; 
  border-radius: 15px;
  padding: 20px;
  background: white;
  list-style-type: none;

  li{
    padding: 15px 20px;
    cursor: pointer;
    border-radius: 15px;
    transition: transform 0.2s, background-color 0.2s, color 0.2s;
    &:hover{
      transform: scale(1.1);
      background-color: ${theme.colors.primary};
      color: ${theme.colors.white};
    }
    .no-underline{
    text-decoration:none;
    color: ${theme.colors.primary};
    &:hover{
      text-decoration:none;
      color: ${theme.colors.white};
    }
  }
  }
`;
