import styled from "styled-components";
import { theme } from "../../../theme";
import { Outlet } from "react-router-dom";
import AdminNav from "./AdminNav/AdminNav";
import { Suspense } from "react";

export default function Admin() {
  return (
    <AdminStyled>
      <AdminNav />
      <div className="container">
        <Suspense>
          <Outlet />
      </Suspense>
      </div>
    </AdminStyled>
  );
}

const AdminStyled = styled.div`
  display: flex;
  flex: 1 1 auto;
  padding: 20;
  background-color: ${theme.colors.greyLight};

  .container{
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
  }
`;
