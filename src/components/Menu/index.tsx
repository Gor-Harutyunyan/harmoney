import ContractCost from "../../icons/ContractCost";
import ContractManage from "../../icons/ContractManage";
import ContractProfit from "../../icons/ContractProfit";
import Dashboard from "../../icons/Dashboard";
import PartnerCompanies from "../../icons/PartnerCompanies";
import MenuItem from "./MenuItem";
import { MenuWrapper } from "./style";
import {
  NavLink,
  useRouteMatch
} from "react-router-dom";

const MENU_ITEMS = [
  { name: "Dashboard", icon: <Dashboard />, path: '/dashboard' },
  { name: "Contract Management ", icon: <ContractManage />, path: '/contract-management' },
  { name: "Contract Costs ", icon: <ContractCost />, path: '/contract-costs' },
  { name: "Contract Profitability ", icon: <ContractProfit />, path: '/contract-profitability' },
  { name: " Partner Companies ", icon: <PartnerCompanies />, path: '/partner-companies' },
];

const Menu = () => {
  let match = useRouteMatch();
  console.log(match)
  return (
    <MenuWrapper>
      {MENU_ITEMS.map((item, id) => (
        <NavLink to={item.path} key={id}>
        <MenuItem item={item} selected />
        </NavLink>
      ))}
    </MenuWrapper>
  );
};

export default Menu;
