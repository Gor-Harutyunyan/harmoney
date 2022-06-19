import { Button } from "antd";
import styled from "styled-components";

export const HeaderWrapper = styled.div`
  min-height: 93px;
  padding: 0 44px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SelectedTitle = styled.span`
  font-size: 22px;
  line-height: 28px;
  color: #282f3f;
`;

export const UserPartWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
`;

export const AddContractBtn = styled(Button)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 24px;
  gap: 10px;
  width: 156px;
  height: 42px;
  background: #477ff6;
  border-radius: 10px;
  font-size: 13px;
  line-height: 18px;
  color: #ffffff;
  border: none;
  cursor: pointer;
`;

export const UserName = styled.span`
  font-size: 17px;
  line-height: 22px;
  color: #282f3f;
`;
