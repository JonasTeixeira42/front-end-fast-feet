/* eslint-disable no-alert */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import RegisterDelivery from '~/components/RegisterDelivery';
import TableDelivery from '~/components/TableDelivery';
import DeliveryModal from '~/components/DeliveryModal';

import content from './content';
import { deleteDeliveryRequest } from '~/store/modules/deliveries/actions';

export default function Deliveries() {
  const [screen, setScreen] = useState('DEFAULT');
  const [showModal, setShowModal] = useState(false);
  const [delivery, setDelivery] = useState(0);

  const dispatch = useDispatch();

  const handleVisualizar = (item) => {
    setDelivery(item);
    setShowModal(true);
  };

  const handleEditar = (item) => {
    setDelivery(item);
    setScreen('EDIT');
  };

  const handleExcluir = (index) => {
    const confirmar = window.confirm(
      `Você realmente quer excluir a encomenda ${index}`
    );

    if (confirmar) {
      dispatch(deleteDeliveryRequest(index));
    }
  };

  const funcoes = {
    Visualizar: handleVisualizar,
    Editar: handleEditar,
    Excluir: handleExcluir,
  };
  return (
    <>
      <RegisterDelivery
        operation={screen}
        backFunction={() => setScreen('DEFAULT')}
        registerFunction={() => setScreen('REGISTER')}
        deliveryIndex={delivery}
      />
      <DeliveryModal
        show={showModal}
        closeModal={() => setShowModal(false)}
        index={delivery}
      />
      {screen === 'DEFAULT' && (
        <TableDelivery operations={content} functions={funcoes} />
      )}
    </>
  );
}
