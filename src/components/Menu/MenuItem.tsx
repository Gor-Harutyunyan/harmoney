import { ReactElement } from "react";
import { MenuItemIcon, MenuItemName, MenuItemWrapper } from "./style";

type Props = {
  item: {
    name: string;
    icon: ReactElement;
    path: string
  };
  selected: boolean
};

const MenuItem = ({ item, selected }: Props) => {
  return (
    <MenuItemWrapper selected={selected}>
      <MenuItemIcon selected={selected}>{item.icon}</MenuItemIcon>
      <MenuItemName selected={selected}> {item.name}</MenuItemName>
    </MenuItemWrapper>
  );
};

export default MenuItem;
