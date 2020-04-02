import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { darken } from 'polished';

export const LinksWrapper = styled.ul``;

export const MenuItem = styled(NavLink)`
  margin-right: 20px;
  font-size: 15px;
  color: #999;
  font-weight: bold;
  transition: color 0.2s;

  &.active {
    color: #444;
  }

  &:hover {
    color: ${darken(0.1, '#999')};
  }
`;
