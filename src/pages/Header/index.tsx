import { useLocation } from "react-router-dom";
import RoundBorder from "../../components/RoundBourder";
import Bell from "../../icons/Bell";
import Plus from "../../icons/Plus";
import User from "../../icons/User";
import {
  AddContractBtn,
  HeaderWrapper,
  SelectedTitle,
  UserPartWrapper,
  UserName,
} from "./style";

const TITLES: Record<string, string> = {
  "/dashboard": "Dashboard",
  "/contract-revenues": "Contract Revenues",
  "/contract-costs": "Contract Costs",
  "/contract-profitability": "Contract Profitability",
  "/client-base": "Client Base",
  "/settings": "Settings",
};

const Header = () => {
  const params = useLocation();

  return (
    <HeaderWrapper>
      <SelectedTitle>{TITLES[params.pathname]}</SelectedTitle>
      <UserPartWrapper>
        <AddContractBtn icon={<Plus />}>Add Contract</AddContractBtn>
        <RoundBorder>
          <Bell />
        </RoundBorder>
        <RoundBorder>
          <User />
        </RoundBorder>
        <UserName>User Name</UserName>
      </UserPartWrapper>
    </HeaderWrapper>
  );
};

export default Header;
