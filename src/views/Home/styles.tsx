import styled from "styled-components";

import Card from "../../components/Card";
import Pagination from "../../components/Pagination";
import { lgOnly, mdOnly, xl } from "../../styles/breakpoints";

export const StyledContainer = styled.div`
  margin: 0 auto;
  padding: 32px;

  @media ${mdOnly} {
    max-width: 768px;
  }

  @media ${lgOnly} {
    max-width: 1024px;
  }

  @media ${xl} {
    max-width: 1366px;
  }
`;

export const StyledCardList = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const StyledCard = styled(Card)`
  flex: 0 0 100%;
  margin-bottom: 16px;

  @media ${lgOnly} {
    flex: 0 0 246px;

    &:not(:nth-child(3n + 3)) {
      margin-right: 16px;
    }
  }

  @media ${xl} {
    flex: 0 0 246px;

    &:not(:nth-child(5n + 5)) {
      margin-right: 16px;
    }
  }
`;

export const StyledPagination = styled(Pagination)`
  margin-top: 16px;
`;
