import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

export default function Input({ value, placeholder,id, className,...restProps }) {
  return <InputStyled className={className} id={id} value={value} placeholder={placeholder}></InputStyled>;
}
const InputStyled = styled.input`
  display: flex;
  width: 100%;
  flex-direction: row;
  border: 1px solid ${theme.colors.greyLight};
  border-radius: 20px;
  gap: 20px;
  input {
    outline: none;
    border: 0;
    font-family: ${theme.fonts.family.normal};
    width: 100%;
  }
`;
