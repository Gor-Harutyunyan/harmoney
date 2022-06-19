import styled from "styled-components";

export const ViewOptionsWrapper = styled.div`
  width: 300px;
  background: #ffffff;
  border: 1px solid #ecebed;
  border-radius: 10px;
  padding: 16px;
`;

export const ViewOptionsHeading = styled.h3`
  font-size: 17px;
  line-height: 22px;
  color: #282f3f;
  margin-bottom: 24px;
`;

export const DefaultView = styled.div`
  width: 268px;
  background: #f7f8fa;
  border-radius: 6px;
  padding: 8px;

  font-size: 15px;
  line-height: 20px;
  color: #313a4e;

  margin-bottom: 24px;
`;

export const OptionsSection = styled.div``;

export const OptionsSectionHeading = styled.div`
  display: flex;
  justify-content: space-between;

  font-size: 13px;
  line-height: 18px;
`;

export const OptionsSectionHeadingLeft = styled.span`
  color: #bcc3d4;
`;

export const OptionsSectionHeadingRight = styled.span`
  color: #525f77;
  cursor: pointer;
`;

export const OptionsSectionOptions = styled.div`
  padding: 16px 8px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ViewOption = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  cursor: pointer;
`;

export const ViewOptionLeft = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;
