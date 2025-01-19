import { Inputs, TextAreas } from "@entry/ui";
import styled from "@emotion/styled";

type InputTextAreaType = {
  label: string;
  valueInput?: string;
  valueArea?: string;
  inputChange?: () => void;
  areaChange?: () => void;
};

export const InputTextArea = ({
  label,
  valueArea,
  valueInput,
  inputChange,
  areaChange,
}: InputTextAreaType) => {
  return (
    <Container>
      <Inputs label={label} value={valueInput} onChange={inputChange} />
      <TextAreas value={valueArea} onChange={areaChange} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;
