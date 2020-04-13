import React, { useState } from 'react';

import SearchAndRegister from '~/components/SearchAndRegister';
import TableDelivery from '~/components/TableDelivery';
import DeliveryModal from '~/components/DeliveryModal';

import content from './content';

import * as S from './styles';

export default function Deliveries() {
  const [screen, setScreen] = useState('DEFAULT');
  const [showModal, setShowModal] = useState(false);
  const [delivery, setDelivery] = useState({});

  const handleVisualizar = (item) => {
    setDelivery(item);
    setShowModal(true);
  };

  const handleEditar = (retorno) => {
    console.log(retorno);
  };

  const handleExcluir = (retorno) => {
    console.log(retorno);
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
      <DeliveryModal
        show={showModal}
        closeModal={() => setShowModal(false)}
        delivery={delivery}
      />
      {screen === 'DEFAULT' && (
        <TableDelivery operations={content} functions={funcoes} />
      )}
      {screen === 'REGISTER' && <h1>EDICAO</h1>}
    </>
  );
}
