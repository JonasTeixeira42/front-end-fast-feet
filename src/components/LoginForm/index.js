import React from 'react';
import * as Yup from 'yup';
import { Input, Form } from '@rocketseat/unform';

import logo from '~/assets/fastFeetLogo.svg';
import * as S from './styles';

const schema = Yup.object().shape({
  email: Yup.string().email('Insira um e-mail válido').required(),
  password: Yup.string().required('A senha é obrigatória'),
});

export default function LoginForm() {
  return (
    <S.Wrapper>
      <S.Logo src={logo} alt="fast feet logo" />

      <Form schema={schema}>
        <S.InputWrapper>
          <Input name="email" placeholder="example@email.com" label="EMAIL" />
        </S.InputWrapper>
        <S.InputWrapper>
          <Input name="password" placeholder="************" label="SUA SENHA" />
        </S.InputWrapper>
        <S.SubmitButton type="submit">Entrar no sistema</S.SubmitButton>
      </Form>
    </S.Wrapper>
  );
}
