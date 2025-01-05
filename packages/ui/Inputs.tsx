import styled from "@emotion/styled";
import { color } from "@entry/design-token";
import { React } from "react";

interface inputs {
  label?: string;
  placeholder?: string;
  type?: "labelInput" | "labelText";
}

export const Inputs = ({ label, type, placeholder }: inputs) => {
  return (
    <InputContainer>
      {type == "labelInput" ? (
        <LabelInput placeholder={placeholder} />
      ) : (
        <LabelText>{label}</LabelText>
      )}
      <Input type="text" />
    </InputContainer>
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

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 14px;
`;

const Input = styled.input`
  width: 100%;
  height: 70px;
  padding-left: 24px;
  font-size: 16px;
  font-weight: 500;
  border: 1px solid ${color.gray[200]};
  border-radius: 12px;
  color: ${color.gray[800]};
`;
