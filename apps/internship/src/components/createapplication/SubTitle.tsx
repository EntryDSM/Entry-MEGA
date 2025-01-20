import styled from "@emotion/styled";
import { color } from "@entry/design-token";

type SubTitleType = {
  placeholder?: string;
};

export const SubTitle = ({ placeholder }: SubTitleType) => {
  return (
    <SubTitleContainer>
      <Input type="text" placeholder={placeholder} />
      <Line />
    </SubTitleContainer>
  );
};

const SubTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Input = styled.input`
  font-size: 16px;
  font-weight: 300;
  &::placeholder {
    color: ${color.gray[200]};
  }
`;

const Line = styled.div`
  width: 417px;
  height: 1px;
  background-color: ${color.gray[400]};
`;
