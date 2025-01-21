import styled from "styled-components";
import Recipe from "./Recipe";
import { useEffect, useState } from "react";
import media from "../../assets/styled/media";
import { theme } from "../../theme";
import Loading from "../layout/loading/Loading";
import { useContext } from "react";
import { ApiContext } from "../../context/ApiContext";


export default function Content() {
  //state
  const [filter, setFilter] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [recipes, setRecipes] = useState([])
  const BASE_URL_API = useContext(ApiContext)
  
  useEffect(() => {
    let cancel = false;
    const fetchRecipes = async () => {
      try{
        setIsLoading(true)
        const response = await fetch(BASE_URL_API);
        if(response.ok && !cancel){
          const recipes = await response.json();
          setRecipes(Array.isArray(recipes) ? recipes : [recipes])
        }
      }catch(e){
        console.log('Erreur', e)
      }finally{
        setIsLoading(false)
      }
    }
    fetchRecipes();
    return () => (cancel = true)
  },[])
  
  //Comportement
  const handleInput = (e) => {
    const filterValue = e.target.value;
    setFilter(filterValue.trim().toLowerCase());
  };
  //render
  return (
    <ContentStyled>
      <h1 className="titleContent">Découvres nos nouvelles recettes</h1>

      <div className="containerBar">
        <i className="fa-solid fa-magnifying-glass iconSearch"></i>
        <input onInput={handleInput} placeholder="Rechercher" />
      </div>

      
        {isLoading ?
            <Loading/>
          : <div className="cards-Container">
          {recipes
            .filter((r) => r.title.toLowerCase().startsWith(filter))
            .map((r) => (
              <Recipe
                key={r.id}
                title={r.title}
                image={r.image}
              />
            ))}
            </div>
        }
        
      
    </ContentStyled>
  );
}

const ContentStyled = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  align-items: center;
  width: 100%;
  margin: auto;
  padding: 20px;
  background-color: ${theme.colors.greyLight};

  .titleContent {
    margin-bottom: 30px;
    margin-top: 30px;

    font-family: ${theme.fonts.family.normal};
  }

  .cards-Container {
    display: grid;
    grid-template-columns: repeat(3, 350px);
    grid-auto-columns: repeat(3, 350px);
    gap: 20px;
    place-content: center;
    border-radius: 20px;
    background: white;
    padding: 20px;

    ${media.md(`
   grid-template-columns: repeat(2,350px);
    grid-auto-columns: repeat(2,350px);
  `)}

    ${media.sm(`
   grid-template-columns: repeat(1,350px);
    grid-auto-columns: repeat(1,350px);
  `)}

${media.xs(`
   grid-template-columns: 1fr;
    grid-auto-columns: 1fr;
  `)}
  }
  .containerBar {
    display: flex;
    padding: 10px 15px;
    margin: 30px 0 30px 0;
    gap: 5px;
    width: 60%;
    flex-direction: row;

    align-items: center;
    border: 1px solid ${theme.colors.greyLight};
    border-radius: 20px;
    background-color: ${theme.colors.white};

    input {
      outline: none;
      border: 0;
      font-family: ${theme.fonts.family.normal};
      width: 100%;
    }

    ::placeholder {
      font-family: ${theme.fonts.family.normal};
    }
  }
  .iconSearch {
    font-size: 15px;
  }

`;
