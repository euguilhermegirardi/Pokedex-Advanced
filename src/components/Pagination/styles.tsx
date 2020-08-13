import styled, { css } from "styled-components";

import { Blue, White } from "../../styles/palette";
import { md } from "../../styles/breakpoints";

const buttonStyles = css`
  background: ${Blue.dark};
  border: 0;
  border-radius: 4px;
  color: ${White.regular};
  cursor: pointer;
  font-weight: bold;
  outline: 0;
  padding: 12px 24px;

  &:disabled {
    cursor: no-drop;
    opacity: 0.3;
  }
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media ${md} {
    display: block;
    text-align: center;
  }
`;

export const StyledNextButton = styled.button`
  ${buttonStyles};
  margin: 12px 0 0 0;

  @media ${md} {
    margin: 0 0 0 12px;
  }
`;

export const StyledPrevButton = styled.button`
  ${buttonStyles};
`;
