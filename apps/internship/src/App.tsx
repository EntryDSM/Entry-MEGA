import React from "react";
import { Router } from "./Router";
import { GlobalStyle } from "../../../packages/design-token/src/themes/GlobalStyle";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <>Hello world</>
      <Router />
    </>
  );
};
