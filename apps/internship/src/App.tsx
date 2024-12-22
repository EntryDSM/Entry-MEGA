import React from "react";
import { Router } from "./Router";
import { GlobalStyle } from "@entry/design-token";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <>Hello world</>
      <Router />
    </>
  );
};
