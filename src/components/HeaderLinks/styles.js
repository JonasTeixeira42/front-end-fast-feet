import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

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
    color: #444;
  }
`;
