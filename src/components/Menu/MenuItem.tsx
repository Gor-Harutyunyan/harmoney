import { ReactElement, useMemo } from "react";
import { NavLink, useMatch } from "react-router-dom";
import { MenuItemIcon, MenuItemName, MenuItemWrapper } from "./style";

type Props = {
  item: {
    name: string;
    icon: ReactElement;
    path: string;
  };
  expanded: boolean;
};

const MenuItem = ({ item, expanded }: Props) => {
  const match = useMatch(item.path);

  const selected = useMemo(() => !!match, [match]);

  return (
    <NavLink to={item.path}>
      <MenuItemWrapper selected={selected} expanded={expanded}>
        <MenuItemIcon selected={selected}>{item.icon}</MenuItemIcon>
        {expanded && (
          <MenuItemName selected={selected}> {item.name}</MenuItemName>
        )}
      </MenuItemWrapper>
    </NavLink>
  );
};

export default MenuItem;
