import styled from 'styled-components';
import { darken } from 'polished';

import searchIcon from '~/assets/searchIcon.svg';

export const Header = styled.header``;

export const Title = styled.h2`
  color: #444444;
  font-weight: bold;
  margin: 34px 0;
`;

export const NavWrapper = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const Button = styled.button`
  background: #7d40e7;
  display: flex;
  align-items: center;
  justify-content: baseline;
  padding: 9px 16px;
  border-radius: 4px;
  transition: background 0.2s;

  &:hover {
    background: ${darken(0.05, '#7d40e7')};
  }
`;

export const InputHeader = styled.input`
  width: 100%;
  max-width: 237px;
  height: 40px;
  background: #f5f5f5 url(${searchIcon}) no-repeat 16px center;
  padding: 10px 40px;
  border-radius: 4px;
  border: 1px solid #ddd;
  color: #999;
  transition: border-color 0.2s;

  &::placeholder {
    color: #999999;
  }

  &:focus {
    border-color: #999;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: baseline;
  margin-right: 7px;
`;

export const ButtonText = styled.span`
  color: #fff;
  font-weight: bold;
`;
