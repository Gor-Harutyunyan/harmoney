import { ReactElement } from "react";
import { RoundWrapper } from "./style";

const RoundBorder = ({ children }: { children: ReactElement }) => {
  return <RoundWrapper>{children}</RoundWrapper>;
};

export default RoundBorder;
