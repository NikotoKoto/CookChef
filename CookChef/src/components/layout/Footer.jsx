import React from "react";
import styled from "styled-components";
import { theme } from "../../theme/index";
export default function Footer() {
  return (
    <FooterStyled>
      <p>Copyright 2024 Coockchef, Inc.</p>
    </FooterStyled>
  );
}

const FooterStyled = styled.footer`
  background: ${theme.colors.greyDark};
  color: white;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: row;
  padding: 20px;
`;
