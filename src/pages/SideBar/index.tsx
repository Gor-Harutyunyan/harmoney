import { useCallback, useState } from "react";
import Logo from "../../components/Logo";
import ExpandIcon from "../../components/ExpandIcon";
import Menu from "../../components/Menu";
import { SideBarWrapper } from "./style";

const SideBar = () => {
  const [expanded, setExpanded] = useState(true);

  const onExpand = useCallback(() => setExpanded((prev) => !prev), []);

  return (
    <SideBarWrapper expanded={expanded}>
      <Logo expanded={expanded} />
      <ExpandIcon onExpand={onExpand} expanded={expanded} />
      <Menu expanded={expanded} />
    </SideBarWrapper>
  );
};

export default SideBar;
