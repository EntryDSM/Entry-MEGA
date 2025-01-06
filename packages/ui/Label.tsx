import { React } from "react";
import styled from "@emotion/styled";
import { color } from "@entry/design-token";

type LabelType = {
  isWrite?: boolean;
  placeholder?: string;
  label?: string;
};

export const Label = ({ isWrite, placeholder, label }: LabelType) => {
  return (
    <>
      {isWrite ? (
        <LabelInput placeholder={placeholder} />
      ) : (
        <LabelText>{label}</LabelText>
      )}
    </>
  );
};

const LabelText = styled.label`
  font-size: 20px;
  font-weight: 500;
  color: ${color.gray[800]};
`;

const LabelInput = styled.input`
  font-size: 20px;
  font-weight: 500;
  color: ${color.gray[800]};
  &::placeholder {
    color: ${color.gray[100]};
    font-size: 20px;
    font-weight: 500;
  }
  background-color: transparent;
`;
