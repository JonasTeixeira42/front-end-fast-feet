import React from 'react';
import SearchAndRegister from '~/components/SearchAndRegister';
import Table from '~/components/Table';

import * as S from './styles';

export default function Deliveries() {
  return (
    <>
      <SearchAndRegister
        title="Gerenciando Encomendas"
        placeholder="Buscar por encomendas"
      />
      <Table />
    </>
  );
}
