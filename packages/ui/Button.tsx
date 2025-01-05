import { React } from "react";
import { color } from "@entry/design-token";
import styled from "@emotion/styled";
import { plus } from "./assets";

interface button {
  isAdmin?: "admin" | "user";
  children?: string;
  type?: "addChildren" | "textChildren";
}

export const Button = ({ isAdmin, children, type }: button) => {
  return (
    <ButtonContainer type="button" isAdmin={isAdmin}>
      {type == "addChildren" ? <img src={plus} alt="plusImg" /> : children}
    </ButtonContainer>
  );
};

const ButtonContainer = styled.button<{ isAdmin: boolean }>`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${color.extra.white};
  font-size: 25px;
  font-weight: 700;
  background-color: ${({ isAdmin }) =>
    isAdmin == "admin" ? color.green[500] : color.orange[500]};
  border-radius: 20px;
`;
