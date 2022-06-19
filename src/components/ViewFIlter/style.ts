import styled from "styled-components";

export const ViewFilterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 4px 4px 0;
  margin: 26px 0;
  border-bottom: 1px solid #f5f5f5;
`;

export const ViewsWrapper = styled.div`
  display: flex;
  gap: 30px;
  font-size: 15px;
  line-height: 20px;
  color: #282f3f;
`;

export const View = styled.span<{
  selected: boolean;
}>`
  padding-bottom: 4px;
  border-bottom: ${(props) =>
    props.selected ? "2px solid #477FF6" : "1px solid #F5F5F5"};
`;

export const FilterText = styled.span`
  font-size: 13px;
  line-height: 16px;
  color: #525f77;
  cursor: pointer;
`;

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
