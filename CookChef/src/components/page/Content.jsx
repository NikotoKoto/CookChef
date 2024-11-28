import styled from "styled-components";
import Recipe from "./Recipe";
import {data} from "./data"
export default function Content() {
  return (
    <ContentStyled>
      <h1 className="titleContent">Découvres nos nouvelles recettes</h1>
      <div className="cards-Container">
        {
          data.map(datas => (
            <Recipe
            key={datas.id}
            title={datas.title}
            image={datas.imageSource} />
          ))
        }
       
 
      </div>
    </ContentStyled>
  );
}

const ContentStyled = styled.div`

  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  margin: auto;
  padding: 20px;

  .titleContent{
    margin-bottom: 30px;
    margin-top: 30px;

  }
  .cards-Container{
    display: grid;
    grid-template-columns: repeat(3,350px);
    grid-auto-columns: repeat(3,350px);
    gap: 20px;
    place-content: center;
    border-radius: 20px;
    background: white;
    padding: 20px;
  }
  
`;
