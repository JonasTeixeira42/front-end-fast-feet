import React from 'react';
import { Input } from '@rocketseat/unform';

import logo from '~/assets/fastFeetLogo.svg';
import * as S from './styles';

export default function LoginForm() {
  return (
    <S.Wrapper>
      <S.Logo src={logo} alt="fast feet logo" />

      <S.Form>
        <S.InputWrapper>
          <Input name="email" placeholder="example@email.com" label="EMAIL" />
        </S.InputWrapper>
        <S.InputWrapper>
          <Input name="password" placeholder="************" label="SUA SENHA" />
        </S.InputWrapper>
        <S.SubmitButton type="submit">Entrar no sistema</S.SubmitButton>
      </S.Form>
    </S.Wrapper>
  );
}
