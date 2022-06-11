import styled from "styled-components";

export const SideBarWrapper = styled.div<{
  expanded: boolean;
}>`
  height: 100%;
  width: ${(props) => (props.expanded ? "276px" : "55px")};
  padding: 34px 14px;
  background: #fff;
  position: relative;
`;
