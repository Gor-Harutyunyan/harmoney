import { Table } from "antd";
import styled from "styled-components";

export const ContractRevenuesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  height: 100%;
`;

export const ContractRevenuesMain = styled.div`
  background: #ffffff;
  border: 1px solid #e6e8ec;
  box-shadow: 0px 0px 1px #f7f6f9;
  border-radius: 14px;
  padding: 18px 24px;
  flex: 1;
`;

export const ContractRevenuesPagination = styled.div`
  background: #ffffff;
  border: 1px solid #e6e8ec;
  box-shadow: 0px 0px 1px #f7f6f9;
  border-radius: 14px;
  height: 56px;

  display: flex;
  justify-content: center;
  padding: 16px 34px 16px 24px;
`;

export const StyledHr = styled.hr`
  border: 1px solid #e6e8ec;
  margin: 15px 0;
`;

export const StyledTable = styled(Table)`
  .ant-table-body {
    max-height: calc(
      100vh - 56px - 32px - 52px - 36px - 56px - 18px - 68px - 95px
    ) !important;
  }

  .ant-table.ant-table-bordered
    > .ant-table-container
    > .ant-table-header
    > table
    > thead
    > tr
    > th {
    border-right: unset;
  }

  .ant-table.ant-table-bordered
    > .ant-table-container
    > .ant-table-body
    > table
    > tbody
    > tr
    > td:first-child {
    border-right: unset;
  }
`;
