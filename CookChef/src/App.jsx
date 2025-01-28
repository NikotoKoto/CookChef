import styled from "styled-components";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Content from "./components/page/Content";
import { useState } from "react";
//  import {SeedRecipes} from "./components/page/Seed";


 //SeedRecipes();

export default function App() {
// state
const [page, setPage] = useState("homepage")
// comportement

// render
  return (
   <AppStyled>
     <Header setPage={setPage}/>
    {page === 'homepage' && <Content/>  } 
    {/* {page === 'admin' && <Admin/>  }  */}
     <Footer/>
   </AppStyled>
  )
}
const AppStyled = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

 
`


