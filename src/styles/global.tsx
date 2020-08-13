import { createGlobalStyle } from "styled-components";

import { White } from "./palette";

const StyledGlobal = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;900&display=swap');

  html {
    line-height: normal;
  }

  body {
    background: ${White.ice};
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    overflow-x: hidden;
  }
`;

export default StyledGlobal;
