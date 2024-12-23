/** @jsxImportSource @emotion/react */

import { color, font } from "@entry/design-token";

interface IButton {
  children: string;
  whatColor?: "admin" | "user";
  onClick?: () => void;
}

const buttonStyle = (whatColor: "admin" | "user") => ({
  border: {
    border: `1px solid ${whatColor === "admin" ? color.green[500] : color.orange[500]}`,
    borderRadius: "100px",
  },
  font: {
    fontSize: font.caption1.fontSize,
    color: whatColor === "admin" ? color.green[500] : color.orange[500],
  },
  field: {
    width: "100px",
    height: "40px",
    padding: "10px 25px",
    backgroundColor: color.extra.white,
    ":hover": {
      backgroundColor:
        whatColor === "admin" ? color.green[500] : color.orange[500],
      color: color.extra.white,
    },
  },
});

export const Button = ({ children, whatColor = "admin", onClick }: IButton) => {
  const btnStyle = buttonStyle(whatColor);

  return (
    <button css={{ ...btnStyle.border, ...btnStyle.font, ...btnStyle.field }}>
      {children}
    </button>
  );
};
