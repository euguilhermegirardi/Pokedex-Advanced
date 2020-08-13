import styled from "styled-components";

import { Blue, Purple, White } from "../../styles/palette";

export const StyledContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
`;

export const StyledErrorText = styled.p`
  color: ${Blue.dark};
  font-size: 16px;
  font-weight: bold;
  margin: 0 0 8px;
`;

export const StyledRetryButton = styled.button`
  background: ${Purple.regular};
  border: 0;
  border-radius: 4px;
  color: ${White.regular};
  cursor: pointer;
  font-weight: 500;
  outline: 0;
  padding: 8px 16px;
  transition: background ease .2s;

  &:hover {
    background: ${Blue.dark};
  }
`; 