import { Title, CheckContents } from "../components";
import styled from "@emotion/styled";
import { Inputs, TextAreas, Radios, SubBtn } from "@entry/ui";

export const ApplicationWriting = () => {
  const inputDatas = [
    { label: "이름" },
    { label: "학번" },
    { label: "전화번호" },
  ];

  const radioDatas = [
    {
      label: "프로그래밍 경력",
      datas: [
        { label: "매우 잘함" },
        { label: "잘함" },
        { label: "보통" },
        { label: "못함" },
        { label: "매우못함" },
      ],
    },
    {
      label: "전공",
      datas: [
        { label: "Frontend" },
        { label: "Backend" },
        { label: "DevOps" },
        { label: "Design" },
      ],
    },
  ];

  const textAreaDatas = [{ label: "지원동기" }, { label: "자기소개" }];

  return (
    <WritingContainer>
      <MainContainer>
        <Title
          mainTitle="지원서 작성하기"
          subTitle="Backend Developer 인턴십 모집"
        />
        <InputContainer>
          {inputDatas.map((data) => {
            return <Inputs isWrite={false} label={data.label} />;
          })}
          {radioDatas.map((data) => {
            return (
              <Radios
                label={data.label}
                isWrite={false}
                userType={"user"}
                name={data.label}
                datas={data.datas}
              />
            );
          })}
          {textAreaDatas.map((data) => {
            return <TextAreas isWrite={false} label={data.label} />;
          })}
        </InputContainer>
        <SubContainer>
          <CheckContents label="(필수) 저는 개인정보 수집 및 이용에 동의합니다." />
          <SubBtn userType="user">제출하기</SubBtn>
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
  width: 100%;
  max-width: 702px;
  display: flex;
  flex-direction: column;
  gap: 64px;
  align-items: center;
  margin: 116px 0 76px 0;
`;
