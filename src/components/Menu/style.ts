import styled from "styled-components";

export const MenuWrapper = styled.div`
  margin-top: 47px;

  & > a {
    text-decoration: none;
  }
`;

export const MenuItemWrapper = styled.div<{
  selected?: boolean;
}>`
  width: 248px;
  border-radius: 12px;
  padding: 15px 13px;
  display: flex;
  align-items: center;
  gap: 17px;
  margin-bottom: 16px;
  ${(props) => props.selected && "background: rgba(13, 98, 238, 0.04);"};
`;

export const MenuItemName = styled.span<{
    selected?: boolean;
}>`
  font-weight: 600;
  font-size: 17px;
  line-height: 22px;
  color: ${props => props.selected ? '#477FF6' : '#525f77'};
`;

export const MenuItemIcon = styled.span<{
    selected?: boolean;
}>`
  color: ${props => props.selected ? '#477FF6' : '#949cb0'};
`;

