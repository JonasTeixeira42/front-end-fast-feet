import React from 'react';
import SearchAndRegister from '~/components/SearchAndRegister';
import Table from '~/components/Table';
import TableOperations from '~/components/TableOperations';

import content from './content';

// import * as S from './styles';

export default function Deliveries() {
  const handleVisualizar = (retorno) => {
    return retorno;
  };

  const handleEditar = (retorno) => {
    return retorno;
  };

  const handleExcluir = (retorno) => {
    return retorno;
  };

  const funcoes = {
    Visualizar: handleVisualizar,
    Editar: handleEditar,
    Excluir: handleExcluir,
  };
  return (
    <>
      <SearchAndRegister
        title="Gerenciando Encomendas"
        placeholder="Buscar por encomendas"
      />
      <Table>
        <TableOperations operations={content} functions={funcoes} />
      </Table>
    </>
  );
}
