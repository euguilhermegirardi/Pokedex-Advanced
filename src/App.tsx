import React from "react";
import { Normalize } from "styled-normalize";

import GlobalStyle from "./styles/global";
import Home from "./views/Home";

function App() {
  return (
    <>
      <Normalize />
      <GlobalStyle />
      <Home />
    </>
  );
}

export default App;
