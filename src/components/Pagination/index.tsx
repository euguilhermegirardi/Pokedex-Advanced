import React from "react";

import { StyledContainer, StyledNextButton, StyledPrevButton } from "./styles";

export interface PaginationProps extends React.HTMLAttributes<HTMLDivElement> {
  disablePrevButton: boolean;
  disableNextButton: boolean;
  onNextPageRequest: () => void;
  onPrevPageRequest: () => void;
}

const Pagination: React.FC<PaginationProps> = (props) => {
  const {
    disablePrevButton,
    disableNextButton,
    onNextPageRequest,
    onPrevPageRequest,
    ...rest
  } = props;

  return (
    <StyledContainer {...rest}>
      <StyledPrevButton
        disabled={disablePrevButton}
        onClick={onPrevPageRequest}
      >
        Previous page
      </StyledPrevButton>
      <StyledNextButton
        disabled={disableNextButton}
        onClick={onNextPageRequest}
      >
        Next page
      </StyledNextButton>
    </StyledContainer>
  );
};

export default Pagination;
