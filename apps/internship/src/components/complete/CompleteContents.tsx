import { Check } from "../../assets/complete";
import styled from "@emotion/styled";
import { color } from "@entry/design-token";

interface isComplete {
  children?: string;
  isColor?: boolean;
}

export const CompleteContents = ({ children, isColor }: isComplete) => {
  return (
    <CompleteContainer>
      <CompleteContentsContainer>
        <Check isColor={isColor} />
        <CompleteMsg>{children}</CompleteMsg>
      </CompleteContentsContainer>
      <MainBtn type="button" isColor={isColor}>
        메인으로
      </MainBtn>
    </CompleteContainer>
  );
};

const CompleteContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 72px;
  align-items: center;
`;

const CompleteContentsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 53px;
`;

const CompleteMsg = styled.div`
  color: ${color.gray[900]};
  font-size: 24px;
  font-weight: 600;
`;

const MainBtn = styled.button<{ isColor: boolean }>`
  cursor: pointer;
  width: 250px;
  height: 60px;
  border-radius: 30px;
  background-color: ${({ isColor }) =>
    isColor ? color.orange[500] : color.green[500]};
  color: ${color.extra.white};
  font-size: 16px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
`;
