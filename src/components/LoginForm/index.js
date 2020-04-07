import React from 'react';
import * as Yup from 'yup';
import { Input, Form } from '@rocketseat/unform';

import logo from '~/assets/fastFeetLogo.svg';
import * as S from './styles';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string()
    .min(6, '6 caracteres no minímo')
    .required('A senha é obrigatória'),
});

export default function LoginForm() {
  const handleSubmit = (data) => {
    console.tron.log(data);
  };

  return (
    <S.Wrapper>
      <S.Logo src={logo} alt="fast feet logo" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <S.InputWrapper>
          <Input name="email" placeholder="example@email.com" label="EMAIL" />
        </S.InputWrapper>
        <S.InputWrapper>
          <Input
            name="password"
            placeholder="************"
            label="SUA SENHA"
            type="password"
          />
        </S.InputWrapper>
        <S.SubmitButton type="submit">Entrar no sistema</S.SubmitButton>
      </Form>
    </S.Wrapper>
  );
}
