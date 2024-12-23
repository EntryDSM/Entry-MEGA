import { Header } from "./components/common/Header";
import { Router } from "./Router";
import { GlobalStyle } from "@entry/design-token";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header userType="admin" isLogin={false} />
      <Router />
    </>
  );
};
