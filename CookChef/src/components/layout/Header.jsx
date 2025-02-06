import { useState } from "react";
import styled from "styled-components";
import { theme } from "../../theme";
import media from "../../assets/styled/media";
import HeaderMenu from "./header/HeaderMenu";
import { IoIosAdd } from "react-icons/io";
import { IoIosLogIn } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Header() {
  //state
  const [showMenu, setShowMenu] = useState(false);
  //comportement

  //render
  return (
    <HeaderStyled>
      <NavLink className="containerHeader" to="/">
        <img src="/cookchef.png" alt="logo cookchef" />
      </NavLink>

      <ul className="headerList">
        <NavLink to="/admin" className="no-underline">
          <button className="btn-primary">
            <IoIosAdd />
            <span>Ajouter un Produit </span>
          </button>
        </NavLink>

        <button className="btn-reverse-primary">
          <FaHeart />
          WhishList
        </button>
        <button className="btn-primary">
          <IoIosLogIn />
          Connexion
        </button>
      </ul>
      <i
        className="fa-solid fa-bars iconBar"
        onClick={() => setShowMenu(!showMenu)}
      ></i>
      {showMenu && (
        <>
          <div className="calc" onClick={() => setShowMenu(false)}></div>
          <HeaderMenu />
        </>
      )}
    </HeaderStyled>
  );
}

const HeaderStyled = styled.div`
  position: relative;
  display: flex;
  height: 58px;
  flex-direction: row;
  align-items: center;
  padding: 5px 15px;
  box-shadow: ${theme.shadows.nav};
  color: ${theme.colors.primary};
  background-color: ${theme.colors.white};

  .iconBar {
    margin-right: 15px;
    display: none;
    ${media.sm(`
     display: block;
     cursor: pointer;
     transition transform 0.2s;
     &:hover{
     oppacity: 0.8;
     transform: scale(1.1);}
     
     &:active{
     transform:scale(0.8);  }`)}
  }

  .containerHeader {
    flex: 1 1 auto;
    cursor: pointer;

    img {
      width: 150px;
    }
  }

 
  .btn-primary {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    padding: 8px 15px;
    margin-right: 15px;
    border-radius: 20px;
    background: ${theme.colors.primary};
    border: 1px solid ${theme.colors.primary};
    color: white;
    cursor: pointer;
    transition: 0.2s opacity;

    
    

    &:hover {
      background: white;
      opacity: 0.8;
      color: ${theme.colors.primary};
      border: 1px solid ${theme.colors.primary};
    }
  }

  .btn-reverse-primary {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    padding: 8px 15px;
    margin-right: 15px;
    border-radius: 20px;
    background: white;
    color: ${theme.colors.primary};
    border: 1px solid ${theme.colors.primary};
    cursor: pointer;
    transition: 0.2s opacity;

    &:hover {
      background: ${theme.colors.primary};
      opacity: 0.8;
      border: 1px solid ${theme.colors.primary};
      color: white;
    }
  }

  .headerList {
    display: flex;
    align-items: center;
    justify-content: center;

    ${media.sm(`
    display: none; `)}
  }

  .calc {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
  }
  .no-underline{
    text-decoration:none;

    &:hover{
      text-decoration:none;
    }
  }
`;
