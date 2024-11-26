import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";
export default function Header() {
  //
  return (
    <HeaderStyled>
      <i className="fa-solid fa-bars iconBar"></i>
      <div className="containerHeader">
        <img src="/cookchef.png" alt="logo cookchef" />
      </div>
      <ul>
        <button className="btn-reverse-primary">
          <i className="fa-solid fa-cart-shopping cartHeader"></i>Panier
        </button>
        <button className="btn-primary">Connexion</button>
      </ul>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px 15px;
  box-shadow: ${theme.shadows.nav};
  color: ${theme.colors.primary};
  background-color: ${theme.colors.white};

  .iconBar {
    margin-right: 15px;
  }

  .containerHeader {
    flex: 1 1 auto;

    img {
      width: 150px;
    }
  }
  .btn-primary {
    padding: 8px 15px;
    margin-right: 15px;
    border-radius: 20px;
    background: ${theme.colors.primary};
    border: 1px solid ${theme.colors.primary};
    color: white;
    cursor: pointer;
    transition: 0.2s opacity;

    &:hover{
      background: white;
      opacity: 0.8;
    color: ${theme.colors.primary};
    border: 1px solid ${theme.colors.primary};
    }
    
  }

  .btn-reverse-primary{
    padding: 8px 15px;
    margin-right: 15px;
    border-radius: 20px;
    background: white;
    color: ${theme.colors.primary};
    border: 1px solid ${theme.colors.primary};
    cursor: pointer;
    transition: 0.2s opacity;

    &:hover{
      background: ${theme.colors.primary};
      opacity: 0.8;
    border: 1px solid ${theme.colors.primary};
    color: white;
    }
  }
  .cartHeader{
    margin-right: 5px;
  }
`;
