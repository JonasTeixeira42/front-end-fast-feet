import styled from 'styled-components';
import { darken } from 'polished';

import searchIcon from '~/assets/searchIcon.svg';

export const Wrapper = styled.section`
  width: 100%;
`;
export const Header = styled.header`
  width: 100%;
`;
export const Title = styled.h2`
  color: #444444;
  margin: 34px 0;
`;
export const Form = styled.form`
  width: 100%;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Button = styled.button`
  background: ${(props) => (props.color ? props.color : '#7d40e7')};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 9px 16px;
  border-radius: 4px;
  transition: background 0.2s;
  margin-left: 16px;
  color: #fff;
  font-weight: bold;

  svg {
    margin-right: 7px;
  }

  &:hover {
    background: ${(props) =>
      props.color ? darken(0.05, props.color) : darken(0.05, '#7d40e7')};
  }
`;
export const Input = styled.input`
  width: 100%;
  max-width: 237px;
  height: 40px;
  background: #fff url(${searchIcon}) no-repeat 16px center;
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
