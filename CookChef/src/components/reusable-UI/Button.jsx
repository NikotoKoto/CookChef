import React from "react";
import styled from "styled-components";
import {theme} from "../../theme/index"
export default function Button({ onClick, className, value }) {
  return (
    <ButtonStyled onClick={onClick} className={className}>
      {value}
    </ButtonStyled>
  );
}

const ButtonStyled = styled.div`
display:flex;
align-items: center;
justify-content:center;
border: none;
padding: 10px;
border-radius: 20px;
color: ${theme.colors.white};
background-color: ${theme.colors.primary};
cursor: pointer;
transform: color 0.2s, background-color 0.2s, border 0.2s transform 0.2s;
&:hover{
color: ${theme.colors.primary};
background-color: ${theme.colors.white};
border: 1px solid ${theme.colors.primary};
}

&:active{
    transform: scale(0.9);
}
`;