import { Input } from "antd";
import styled from "styled-components";

export const TableFiltersWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Search = styled(Input)`
  width: 250px;
  background: #ffffff;
  border: 1px solid #ecebed;
  border-radius: 8px;
  padding: 14px;
  display: flex;
  align-items: center;
  gap: 12px;

  .ant-input {
    border: none;
    outline: none;
    font-size: 13px;
    line-height: 20px;
  }
`;

export const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
`;
