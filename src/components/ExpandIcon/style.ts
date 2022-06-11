import styled from "styled-components";

export const ExpandWrapper = styled.span<{
  expanded: boolean;
}>`
  /* width: 24px;
  height: 24px; */
  font-size: 12px;
  padding: 6px;
  box-shadow: 0px 2px 8px #f8fafb;
  border-radius: 5px;
  position: absolute;
  right: -12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  color: #282f3f;
  ${(props) =>
    !props.expanded &&
    `
  transform: rotate(-180deg);
  
  `};
`;
