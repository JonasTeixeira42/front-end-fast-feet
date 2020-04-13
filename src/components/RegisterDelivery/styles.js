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
  background: ${(props) => (props.color ? props.color : '#7d40e7')};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 9px 16px;
  border-radius: 4px;
  transition: background 0.2s;
  margin-left: 16px;

  &:hover {
    background: ${(props) =>
      props.color ? darken(0.05, props.color) : darken(0.05, '#7d40e7')};
  }
`;

export const InputHeader = styled.input`
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

export const IconWrapper = styled.div`
  display: flex;
  align-items: baseline;
  margin-right: 6px;
`;

export const ButtonText = styled.span`
  color: #fff;
  font-weight: bold;
`;

export const ButtonWrapper = styled.div`
  display: flex;
`;
export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 4px;
  background: #fff;
  padding: 30px 26px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 550px;
`;

export const LastInput = styled.div`
  padding-top: 16px;
  width: 100%;
`;

export const InputLabel = styled.label`
  font-weight: bold;
  color: #444444;
  margin-bottom: 9px;
`;

export const SelectWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Input = styled.input`
  width: 100%;
  border-radius: 4px;
  border: 1px solid #ccc;
  padding: 8px;
  margin-top: 9px;

  &::placeholder {
    font-size: 16px;
  }

  &:focus {
    border: 1px solid #b3b3b3;
  }
`;
