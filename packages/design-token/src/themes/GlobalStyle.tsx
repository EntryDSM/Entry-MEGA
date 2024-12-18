import { Global, css } from "@emotion/react";
import React from "react";

const style = css`
  @font-face {
    font-family: "Pretendard-Regular";
    src: url("https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
      format("woff");
    font-weight: 100 900;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    outline: unset;
    list-style: none;
    font-style: normal;
    font-family: "Pretendard-Regular";
    text-decoration: none;
  }

  body {
    overflow-x: hidden;
  }
  button {
    outline: none;
    border: none;
    &:active {
      outline: none;
      border: none;
    }
  }
`;

export const GlobalStyle = () => {
  return <Global styles={style} />;
};
