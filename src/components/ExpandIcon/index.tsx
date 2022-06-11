import Expand from "../../icons/Expand";
import { ExpandWrapper } from "./style";

type Props = {
  onExpand: () => void;
  expanded: boolean;
};

const ExpandIcon = ({ onExpand, expanded }: Props) => {
  return (
    <ExpandWrapper onClick={onExpand} expanded={expanded}>
      <Expand />
    </ExpandWrapper>
  );
};

export default ExpandIcon;
