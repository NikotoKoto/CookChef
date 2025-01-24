import styled from "styled-components";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Content from "./components/page/Content";
 import {SeedRecipes} from "./components/page/Seed";

 SeedRecipes();

export default function App() {
 

  return (
   <AppStyled>
     <Header/>
     <Content/>
     <Footer/>
   </AppStyled>
  )
}
const AppStyled = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

 
`


