import styled from "styled-components";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Admin from "./components/page/admin/Admin"
import Content from "./components/page/homePage/Content";
import { useState } from "react";
import {SeedRecipes} from "./components/page/homePage/Seed";


SeedRecipes();

export default function App() {
// state
const [page, setPage] = useState("homePage")
// comportement

// render
  return (
   <AppStyled>
     <Header setPage={setPage}/>
    {page === 'homePage' && <Content/>  } 
    {page === 'admin' && <Admin/>  } 
     <Footer/>
   </AppStyled>
  )
}
const AppStyled = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
 
`


