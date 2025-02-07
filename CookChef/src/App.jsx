import styled from "styled-components";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";

import { SeedRecipes } from "./components/page/homePage/Seed";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";

SeedRecipes();

export default function App() {
  // state

  // comportement

  // render
  return (
    <AppStyled>
      <Header />
      <Suspense>
        {/* Suspense Used when we use Lazy */}
      <Outlet/> 
      </Suspense>
      {/* Used to render Admin and Hompeage with our router */}
      <Footer />
    </AppStyled>
  );
}
const AppStyled = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
