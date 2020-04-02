import React from 'react';
import SearchAndRegister from '~/components/SearchAndRegister';

import * as S from './styles';

export default function Deliveries() {
  return (
    <S.Wrapper>
      <SearchAndRegister
        title="Gerenciando Encomendas"
        placeholder="Buscar por encomendas"
      />
    </S.Wrapper>
  );
}
