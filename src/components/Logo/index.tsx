import { NavLink } from "react-router-dom";
import { Title, LogoWrapper, StyledLogo } from "./style";

type Props = {
  expanded: boolean;
};
const Logo = ({ expanded }: Props) => {
  return (
    <NavLink to="/">
      <LogoWrapper>
        <StyledLogo />
        {expanded && <Title>Harmoney</Title>}
      </LogoWrapper>
    </NavLink>
  );
};

export default Logo;
