import styled from "styled-components";

export const FilterOptionsWrapper = styled.div`
  background: #ffffff;
  border: 1px solid #ecebed;
  border-radius: 10px;
  padding: 7px 6px;

  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const FilterOption = styled.div<{
  selected: boolean;
}>`
  display: flex;
  justify-content: flex-start;
  gap: 13px;
  padding: 9px 11px;
  border-radius: 6px;

  cursor: pointer;

  svg {
    color: #949cb0;
  }

  ${(props) => props.selected && "background: #F7F8FA"}
`;

export const FilterOptionName = styled.span`
  font-size: 13px;
  line-height: 18px;
  color: #313a4e;
`;
