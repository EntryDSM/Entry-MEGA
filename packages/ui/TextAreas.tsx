import styled from "@emotion/styled";
import { color } from "@entry/design-token";
import { React } from "react";
import { Label } from "@entry/ui";

type TextAreaType = {
  isWrite?: boolean;
  placeholder?: string;
  label?: string;
};

export const TextAreas = ({ label, isWrite, placeholder }: TextAreaType) => {
  return (
    <TextAreaContainer>
      <Label label={label} isWrite={isWrite} placeholder={placeholder} />
      <TextArea />
    </TextAreaContainer>
  );
};

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
