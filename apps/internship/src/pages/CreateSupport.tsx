import { CheckContents, Title, KeyWord } from "../components";
import { Inputs, Label, Button, InputTextArea, SubBtn } from "@entry/ui";
import { useRef, useState, React } from "react";
import styled from "@emotion/styled";

export const CreateSupport = () => {
  const fileRef = useRef();
  const [imgUrl, setImgUrl] = useState<string>("");
  const [areaInputItems, setAreaInputItems] = useState<string[]>([]);
  const [keywordItems, setKeywordItems] = useState<string[]>([]);
  const [keywordValue, setKeywordValue] = useState<string>("");

  const imgBtnClick = () => {
    fileRef.current?.showPicker();
  };

  const handleImgChange = () => {
    const files = fileRef.current.files;

    if (files) {
      const url = URL.createObjectURL(files[0]);
      console.log(url);
      setImgUrl(url);
    }
  };

  const areaInputAddClick = () => {
    setAreaInputItems((prev) => [...prev, ""]);
  };

  const enterKeyWord = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setKeywordValue(e.target.value);
      setKeywordItems((prev) => [...prev, keywordValue]);
      setKeywordValue("");
    }
  };
  return (
    <CreateSupportContainer>
      <TitleContainer>
        <Title
          mainTitle="지원페이지 제작하기"
          subTitle="신청 페이지를 만들 수 있어요"
        />
        <InputContainer>
          <Inputs label="제목" />
          <>
            <Inputs
              label="키워드"
              onKeyDown={enterKeyWord}
              value={keywordValue}
              onChange={(e) => setKeywordValue(e.target.value)}
            />
            <KeyWordContainer>
              {keywordItems.map((item, index) => (
                <KeyWord key={index}>{item}</KeyWord>
              ))}
            </KeyWordContainer>
          </>
          <ImgAllContainer>
            <Label label="타이틀 사진" />
            <ImgContainer>
              <ImgBtnContainer>
                <Button userType="admin" onClick={imgBtnClick} />
              </ImgBtnContainer>
              {imgUrl && <KeyWord>{imgUrl}</KeyWord>}
            </ImgContainer>
            <FakeInput type="file" ref={fileRef} onChange={handleImgChange} />
          </ImgAllContainer>
          <>
            <InputTextArea label={"설명(1)"} />
            {areaInputItems.map((item, index) => (
              <InputTextArea label={`설명(${index + 2})`} />
            ))}
            <Button userType="admin" onClick={areaInputAddClick} />
          </>
        </InputContainer>
        <CheckContainer>
          <CheckBoxContainer>
            <CheckContents label="집중채용" />
            <CheckContents label="중요" />
          </CheckBoxContainer>
          <SubBtn userType="admin">다음으로</SubBtn>
        </CheckContainer>
      </TitleContainer>
    </CreateSupportContainer>
  );
};

const CreateSupportContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  margin: 164px 0;
`;

const KeyWordContainer = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`;

const CheckContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 116px;
`;

const CheckBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const ImgBtnContainer = styled.div`
  width: 249px;
`;

const InputContainer = styled.div`
  width: 702px;
  display: flex;
  flex-direction: column;
  gap: 63px;
`;

const ImgAllContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const FakeInput = styled.input`
  display: none;
`;

const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;
  flex-wrap: wrap;
`;
