import React from 'react';
import { Plus } from '@styled-icons/boxicons-regular/Plus';
import { Check } from '@styled-icons/heroicons-outline/Check';

import * as S from './styles';

export default function RecipientForm() {
  return (
    <S.Wrapper>
      <S.Header>
        <S.Title>Gerenciando destinatários</S.Title>
      </S.Header>
      <S.Form>
        <S.ButtonWrapper>
          <S.Input />
          <S.Button>
            <Plus size="16" color="#fff" />
            CADASTRAR
          </S.Button>
        </S.ButtonWrapper>
      </S.Form>
    </S.Wrapper>
  );
}
