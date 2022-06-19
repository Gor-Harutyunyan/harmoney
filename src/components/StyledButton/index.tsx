import { ReactElement } from "react";
import { CustomButton } from "./style";

const StyledButton = ({ children }: { children: ReactElement }) => {
  return <CustomButton>{children}</CustomButton>;
};

export default StyledButton;
