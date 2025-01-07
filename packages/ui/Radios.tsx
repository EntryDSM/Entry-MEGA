import styled from "@emotion/styled";
import { color } from "@entry/design-token";
import { React, useState } from "react";
import { Label, SubBtn } from "@entry/ui";
import { Check } from "./assets";
import { css } from "@emotion/react";

type RadioType = {
  userType?: "admin" | "user";
  isWrite?: boolean;
  placeholder?: string;
  label?: string;
  radioLabel?: string;
  radioPlaceholder?: string;
  name?: string;
};

type RadioItemType = {
  userType?: "admin" | "user";
  radioPlaceholder?: string;
  radioLabel?: string;
  isWrite?: boolean;
  name?: string;
};

const RadioItem = ({
  radioPlaceholder,
  isWrite,
  userType,
  radioLabel,
  name,
}: RadioItemType) => {
  return (
    <RadioItemContainer>
      <RadioFakeContainer>
        <Radio type="radio" userType={userType} name={name} />
        <ImgContainer>
          <Check />
        </ImgContainer>
      </RadioFakeContainer>
      <Label
        isWrite={isWrite}
        placeholder={radioPlaceholder}
        label={radioLabel}
      />
    </RadioItemContainer>
  );
};

export const Radios = ({
  label,
  isWrite,
  placeholder,
  radioLabel,
  userType,
  radioPlaceholder,
  name,
}: RadioType) => {
  const [addRadio, setAddRadio] = useState<RadioItemType[]>([]);
  const addRadioClick = () => {
    setAddRadio([
      ...addRadio,
      { radioPlaceholder, isWrite, userType, radioLabel },
    ]);
  };
  return (
    <RadioContainer>
      <Label label={label} isWrite={isWrite} placeholder={placeholder} />
      <ContentContainer>
        {addRadio.map((item, index) => (
          <RadioItem
            key={index}
            isWrite={item.isWrite}
            radioPlaceholder={item.radioPlaceholder}
            userType={item.userType}
            radioLabel={item.radioLabel}
            name={name}
          />
        ))}
        {/*아래는 isWrite가 false일 때 뜨는 radio입니다.*/}
        <RadioItem
          isWrite={isWrite}
          radioPlaceholder={radioPlaceholder}
          userType={userType}
          radioLabel={radioLabel}
          name={name}
        />
        <RadioItem
          isWrite={isWrite}
          radioPlaceholder={radioPlaceholder}
          userType={userType}
          radioLabel={radioLabel}
          name={name}
        />
        <RadioItem
          isWrite={isWrite}
          radioPlaceholder={radioPlaceholder}
          userType={userType}
          radioLabel={radioLabel}
          name={name}
        />
        <RadioItem
          isWrite={isWrite}
          radioPlaceholder={radioPlaceholder}
          userType={userType}
          radioLabel={radioLabel}
          name={name}
        />
        {isWrite && <SubBtn userType="admin" onClick={addRadioClick} />}
      </ContentContainer>
    </RadioContainer>
  );
};
const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 46px;
  flex-wrap: wrap;
  align-items: center;
`;

const RadioContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 30px;
`;

const Radio = styled.input<Pick<RadioType, "userType">>`
  width: 30px;
  height: 30px;
  padding-left: 24px;
  font-size: 16px;
  font-weight: 500;
  border-radius: 50%;
  appearance: none;
  box-shadow: 0 0 0 1px ${color.gray[600]};
  &:checked {
    box-shadow: 0 0 0 1.6px
      ${({ userType }) =>
        userType == "admin" ? color.green[500] : color.orange[500]};
    background-color: ${({ userType }) =>
      userType == "admin" ? color.green[500] : color.orange[500]};
  }
`;

const RadioItemContainer = styled.div`
  width: 128px;
  display: flex;
  gap: 14px;
  align-items: center;
`;

const RadioFakeContainer = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
`;

const ImgContainer = styled.div`
  position: absolute;
  top: 3px;
  left: 3px;
  pointer-events: none;
`;
