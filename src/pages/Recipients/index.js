import React from 'react';
import SearchAndRegister from '~/components/SearchAndRegister';

import * as S from './styles';

export default function Deliveries() {
  return (
    <>
      <SearchAndRegister
        title="Gerenciando Destinatários"
        placeholder="Buscar por destinatários"
      />
    </>
  );
}
