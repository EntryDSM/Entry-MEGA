import { Inputs, TextAreas } from "@entry/ui";
import styled from "@emotion/styled";

type InputTextAreaType = {
  label: string;
  valueInput?: string;
  valueArea?: string;
};

export const InputTextArea = ({
  label,
  valueArea,
  valueInput,
}: InputTextAreaType) => {
  return (
    <Container>
      <Inputs label={label} value={valueInput} />
      <TextAreas value={valueArea} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;
