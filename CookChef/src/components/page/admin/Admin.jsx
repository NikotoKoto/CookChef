import styled from "styled-components";
import { theme } from "../../../theme";
import { Outlet } from "react-router-dom";
import AdminNav from "./AdminNav/AdminNav";
import { Suspense } from "react";

export default function Admin() {
  return (
    <AdminStyled>
      <h1>Welcome to your Panel Admin</h1>
      <AdminNav />
      <Suspense>
        <Outlet />
      </Suspense>
    </AdminStyled>
  );
}

const AdminStyled = styled.div`
  display: flex;
  align-items: center;
  padding-top: 20px;
  flex-direction: column;
  flex: 1;
  gap: 20px;
  background-color: ${theme.colors.greyLight};
`;
