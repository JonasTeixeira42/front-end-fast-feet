import React from 'react';

import LoginForm from '~/components/LoginForm';

import * as S from './styles';

export default function Login() {
  return (
    <S.LoginWrapper>
      <LoginForm />
    </S.LoginWrapper>
  );
}
