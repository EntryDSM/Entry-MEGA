import styled from "@emotion/styled";
import { color } from "@entry/design-token";
import { React } from "react";

interface textareas {
  label?: string;
  placeholder?: string;
  type?: "labelInput" | "labelText";
}

export const TextAreas = ({ label, type, placeholder }: textareas) => {
  return (
    <TextAreaContainer>
      {type == "labelInput" ? (
        <LabelInput placeholder={placeholder} />
      ) : (
        <LabelText>{label}</LabelText>
      )}
      <TextArea />
    </TextAreaContainer>
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

const TextAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 14px;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 372px;
  padding: 12px 24px 0 24px;
  font-size: 16px;
  font-weight: 500;
  border: 1px solid ${color.gray[200]};
  border-radius: 12px;
  color: ${color.gray[800]};
  resize: none;
`;
