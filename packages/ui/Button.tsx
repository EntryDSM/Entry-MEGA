import { React } from "react";
import { color } from "@entry/design-token";
import styled from "@emotion/styled";
import { Plus } from "./assets";

type ButtonType = {
  userType?: "admin" | "user";
  children?: string;
};

export const Button = ({ userType, children }: ButtonType) => {
  return (
    <ButtonContainer type="button" userType={userType}>
      {children ? children : <Plus color="#ffffff" size={22} />}
    </ButtonContainer>
  );
};

const ButtonContainer = styled.button<Pick<ButtonType, "userType">>`
  //Pick : ButtonType에서 userType만 선택해 새로운 타입 만들기
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${color.extra.white};
  font-size: 25px;
  font-weight: 700;
  background-color: ${({ userType }) =>
    userType == "admin" ? color.green[500] : color.orange[500]};
  border-radius: 20px;
`;
