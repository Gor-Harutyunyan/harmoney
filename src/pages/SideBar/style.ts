import styled from "styled-components";

export const SideBarWrapper = styled.div<{
  expanded: boolean;
}>`
  width: ${(props) => (props.expanded ? "16%" : "5%")};
  min-width: ${(props) => (props.expanded ? "16%" : "5%")};
  padding: 34px 14px;
  background: #fff;
  position: relative;
`;
