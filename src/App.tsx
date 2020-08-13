import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import { Normalize } from "styled-normalize";

import GlobalStyle from "./styles/global";
import Home from "./views/Home";
import store from "./store";

function App() {
  return (
    <>
      <Normalize />
      <GlobalStyle />
      <ReduxProvider store={store}>
        <Home />
      </ReduxProvider>
    </>
  );
}

export default App;
