import { React } from "react";
import styled from "@emotion/styled";
import { color } from "@entry/design-token";

export const CarrerItem = () => {
  return (
    <CarrerItemContainer>
      <Top>
        <ListItemContent>과자 배달부 모집 ( 비정규직 )</ListItemContent>
        <ImportantList>
          <Focus>집중채용</Focus>
          <Important>중요</Important>
        </ImportantList>
      </Top>
      <TagsContainer>
        <TechStack>
          {/* tag api */}
          <TechTag>개발</TechTag>
          <TechTag>Go언어</TechTag>
          <TechTag>프론트엔드</TechTag>
        </TechStack>
      </TagsContainer>
    </CarrerItemContainer>
  );
};

const TagsContainer = styled.div`
  width: 100%;
  margin-top: 10px;
`;

const TechStack = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

const TechTag = styled.div`
  color: ${color.gray[400]};
  font-size: 12px;
  font-weight: 500;
`;

const Focus = styled.div`
  width: 60px;
  height: 22px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffc9c9;
  color: #ff6666;
  border-radius: 15px;
`;

const Important = styled.div`
  width: 60px;
  height: 22px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #9eaeff;
  color: #002fff;
  border-radius: 15px;
`;

const ImportantList = styled.div`
  display: flex;
  font-size: 11px;
  gap: 10px;
  font-weight: bold;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2%;
  gap: 9px;
`;

const ListItemContent = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: ${color.gray[500]};
  font-weight: bold;
`;

const CarrerItemContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 1.25rem 1.5rem;
  border-radius: 15px;
  transition: all 0.2s ease-in-out;
  min-height: 120px;
  flex-direction: column;
  width: 100%;
  min-width: 335px;

  &:hover {
    background-color: #f1f1f1;
    transform: translateY(-2px);
  }
`;
