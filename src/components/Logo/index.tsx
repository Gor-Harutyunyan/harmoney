import { Title, LogoWrapper, StyledLogo } from "./style";

type Props = {
  expanded: boolean;
};
const Logo = ({ expanded }: Props) => {
  return (
    <LogoWrapper>
      <StyledLogo />
      {expanded && <Title>Harmoney</Title>}
    </LogoWrapper>
  );
};

export default Logo;
