import React from "react";

import { StyledContainer, StyledErrorText, StyledRetryButton } from "./styles";

export interface ErrorProps extends React.HTMLAttributes<HTMLDivElement> {
  retryRequest?: () => void;
}

const Error: React.FC<ErrorProps> = ({ retryRequest, ...props }) => {
  const retryButtonClickHandler = () => {
    if (retryRequest) {
      retryRequest();
    }
  };

  return (
    <StyledContainer {...props}>
      <StyledErrorText>
        Ops! Ocorreu um erro na solicitação à API.
      </StyledErrorText>

      <StyledRetryButton onClick={retryButtonClickHandler}>
        Tentar novamente
      </StyledRetryButton>
    </StyledContainer>
  );
};

export default Error;
