import { useState } from "react";
import styled from "styled-components";
import { theme } from "../../theme";
import media from "../../assets/styled/media";
import HeaderMenu from "./header/HeaderMenu";
export default function Header() {
  //state
  const [showMenu, setShowMenu] = useState(false);
  //comportement

  //render
  return (
    <HeaderStyled>
      <div className="containerHeader">
        <img src="/cookchef.png" alt="logo cookchef" />
      </div>
      <ul className="headerList">
        <button className="btn-reverse-primary">
          <i className="fa-solid fa-heart cartHeader"></i>WhishList
        </button>
        <button className="btn-primary">Connexion</button>
      </ul>
      <i
        className="fa-solid fa-bars iconBar"
        onClick={() => setShowMenu(!showMenu)}
      ></i>
      {showMenu && <>
        <div className="calc" onClick={()=> setShowMenu(false)}></div>
        <HeaderMenu /></>}
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

    &:hover {
      background: white;
      opacity: 0.8;
      color: ${theme.colors.primary};
      border: 1px solid ${theme.colors.primary};
    }
  }

  .btn-reverse-primary {
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
  .cartHeader {
    margin-right: 5px;
  }

  .headerList {
    ${media.sm(`
    display: none; `)}
  }

  .calc{
    position: fixed;
    top: 0;
    left:0;
    width:100%;
    height: 100vh;
  }
`;
