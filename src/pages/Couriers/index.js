import React from 'react';
import SearchAndRegister from '~/components/SearchAndRegister';

import * as S from './styles';

export default function Deliveries() {
  return (
    <>
      <SearchAndRegister
        title="Gerenciando Entregadores"
        placeholder="Buscar por entregadores"
      />
    </>
  );
}
