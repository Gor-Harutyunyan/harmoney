import ContractCost from "../../icons/ContractCost";
import ContractManage from "../../icons/ContractManage";
import ContractProfit from "../../icons/ContractProfit";
import Dashboard from "../../icons/Dashboard";
import PartnerCompanies from "../../icons/PartnerCompanies";
import MenuItem from "./MenuItem";
import { MenuWrapper } from "./style";
import Settings from "../../icons/Settings";

const MENU_ITEMS = [
  { name: "Dashboard", icon: <Dashboard />, path: "/dashboard" },
  {
    name: "Contract Revenues ",
    icon: <ContractManage />,
    path: "/contract-revenues",
  },
  { name: "Contract Costs ", icon: <ContractCost />, path: "/contract-costs" },
  {
    name: "Contract Profitability ",
    icon: <ContractProfit />,
    path: "/contract-profitability",
  },
  {
    name: " Client Base ",
    icon: <PartnerCompanies />,
    path: "/client-base",
  },
];

const Menu = ({ expanded }: { expanded: boolean }) => {
  return (
    <>
      <MenuWrapper>
        {MENU_ITEMS.map((item, id) => (
          <MenuItem item={item} expanded={expanded} key={id} />
        ))}
      </MenuWrapper>
      <MenuItem
        item={{ name: "Settings", icon: <Settings />, path: "/settings" }}
        expanded={expanded}
      />
    </>
  );
};

export default Menu;
