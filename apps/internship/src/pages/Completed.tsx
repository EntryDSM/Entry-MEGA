import { CompleteContents } from "../components/complete";
import { React } from "react";
import styled from "@emotion/styled";

export const Completed = () => {
  return (
    <CompletedContainer>
      <CompleteContents isColor={false}>
        작성이 완료 되었습니다!
      </CompleteContents>
    </CompletedContainer>
  );
};

const CompletedContainer = styled.div`
  width: 100vw;
  height: 86vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
