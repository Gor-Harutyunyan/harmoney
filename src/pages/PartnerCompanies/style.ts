import { Table } from "antd";
import styled from "styled-components";

export const PartnerCompaniesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 34px;
  height: 100%;
`;

export const PartnerCompaniesMain = styled.div`
  background: #ffffff;
  border: 1px solid #e6e8ec;
  box-shadow: 0px 0px 1px #f7f6f9;
  border-radius: 14px;
  padding: 18px 24px;
  flex: 1;
`;

export const PartnerCompaniesPagination = styled.div`
  background: #ffffff;
  border: 1px solid #e6e8ec;
  box-shadow: 0px 0px 1px #f7f6f9;
  border-radius: 14px;
  height: 56px;
`;

export const StyledHr = styled.hr`
  border: 1px solid #e6e8ec;
  margin: 15px 0;
`;

export const StyledTable = styled(Table)`
  table {
    width: 100%;
  }
`;
