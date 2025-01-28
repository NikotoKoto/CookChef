import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

// Forwarding ref for React Hook Form compatibility
const Input = React.forwardRef(({ className, ...restProps }, ref) => {
  return (
    <InputStyled
      ref={ref} // Forward the ref to the native input
      className={className}
      {...restProps} // Pass all props like name, onChange, etc.
    />
  );
});

const InputStyled = styled.input`
  display: block;
  width: 100%;
  
  font-size: 16px;
  border: 1px solid ${theme.colors.greyLight};
  border-radius: 8px;
  outline: none;
  font-family: ${theme.fonts.family.normal};

  &:focus {
    border-color: ${theme.colors.primary};
  }

  &.error {
    border-color: red;
  }
`;

export default Input;
