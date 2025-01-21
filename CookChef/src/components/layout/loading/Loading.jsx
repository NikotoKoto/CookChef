import styled from "styled-components";
import { ImSpinner } from "react-icons/im";
import { theme } from "../../../theme";
export default function Loading() {
  return (
    <LoadingStyled className="loadingSpan">
      <ImSpinner className="spinnerImg"/>
    </LoadingStyled>
  );
}

const LoadingStyled = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  font-size: 50px;

  .spinnerImg{
    color: ${theme.colors.primary};
    animation: rotate 2s infinite;
    
  }

  @keyframes rotate {
    from{
        transform: rotate(0);

    }

    to{
        transform: rotate(360deg);
    }
  }
`;
