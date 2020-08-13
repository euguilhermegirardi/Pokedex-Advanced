import React from "react";

import { StyledContainer } from "./styles";

const Loader: React.FC = () => (
  <StyledContainer>
    <div className="lds-circle">
      <div></div>
    </div>
  </StyledContainer>
);

export default Loader;
