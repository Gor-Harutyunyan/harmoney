import styled from "styled-components";

export const MenuWrapper = styled.div`
  margin: 47px 0 30px;
  border-bottom: 1px solid #eef0f2;
`;

export const MenuItemWrapper = styled.div<{
  selected?: boolean;
  expanded?: boolean;
}>`
  border-radius: 12px;
  padding: 15px 13px;
  display: flex;
  align-items: center;
  gap: 17px;
  margin-bottom: 16px;
  ${(props) => props.selected && "background: rgba(13, 98, 238, 0.04);"};
  ${(props) => !props.expanded && props.selected && "justify-content: center"};
`;

export const MenuItemName = styled.span<{
  selected?: boolean;
}>`
  font-weight: 600;
  font-size: 17px;
  line-height: 22px;
  color: ${(props) => (props.selected ? "#477FF6" : "#525f77")};
`;

export const MenuItemIcon = styled.span<{
  selected?: boolean;
}>`
  color: ${(props) => (props.selected ? "#477FF6" : "#949cb0")};
`;
