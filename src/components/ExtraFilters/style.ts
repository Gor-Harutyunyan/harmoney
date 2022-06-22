import styled from "styled-components";
import ArrowDown from "../../icons/ArrowDown";

export const ExtraFiltersWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 12px;
`;

export const ExtraFilterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fafafc;
  border: 0.5px solid #e6e8ec;
  border-radius: 4px;
  cursor: pointer;

  padding: 8px;
`;

export const ExtraFilterIcon = styled.span`
  color: #949cb0;
  margin-right: 6px;
  display: flex;
  align-items: center;
`;

export const ExtraFilterName = styled.span`
  font-size: 12px;
  line-height: 16px;
  color: #282f3f;
  margin-right: 4px;
`;
