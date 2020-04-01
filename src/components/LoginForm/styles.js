import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 360px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 60px 30px;

  form {
    margin-top: 40px;
    width: 100%;

    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
      order: -1;
    }
  }
`;

export const Logo = styled.img`
  width: 100%;
  max-width: 259px;
  height: 44px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;

  input {
    border-radius: 4px;
    border: 1px solid #ddd;
    padding: 15px 12px;
    margin-bottom: 15px;

    &::placeholder {
      font-size: 16px;
      color: #999;
    }
  }

  label {
    font-weight: bold;
    color: #444;
    margin-bottom: 9px;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 0;
  background: #7d40e7;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  transition: background 0.2s;

  &:hover {
    background: ${darken(0.05, '#7d40e7')};
  }
`;
