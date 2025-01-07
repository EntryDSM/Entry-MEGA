import { Title, CheckContents } from "../components";
import styled from "@emotion/styled";
import { Inputs, TextAreas, Radios, SubBtn } from "@entry/ui";

export const ApplicationWriting = () => {
  return (
    <WritingContainer>
      <MainContainer>
        <Title
          mainTitle="지원서 작성하기"
          subTitle="Backend Developer 인턴십 모집"
        />
        <InputContainer>
          <Inputs isWrite={false} label="이름" />
          <Inputs isWrite={false} label="학번" />
          <Inputs isWrite={false} label="전화번호" />
          <Radios
            label="프로그래밍 경력"
            isWrite={false}
            radioLabel="매우 잘함"
            userType={"user"}
            name="Programming"
          />
          <Radios
            label="전공"
            isWrite={false}
            radioLabel="Frontend"
            userType={"user"}
            name="Major"
          />
          <TextAreas isWrite={false} label="지원동기" />
          <TextAreas isWrite={false} label="자기소개" />
        </InputContainer>
        <SubContainer>
          <CheckContents label="(필수) 저는 개인정보 수집 및 이용에 동의합니다." />
          <SubBtn userType="user" isText={true}>
            제출하기
          </SubBtn>
        </SubContainer>
      </MainContainer>
    </WritingContainer>
  );
};

const WritingContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 100px 0;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  align-items: start;
`;

const InputContainer = styled.div`
  width: 702px;
  display: flex;
  flex-direction: column;
  gap: 64px;
  align-items: center;
  margin: 116px 0 76px 0;
`;
