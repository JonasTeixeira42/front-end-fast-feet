/* eslint-disable no-alert */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import CourierForm from '~/components/CourierForm';
import TableCouriers from '~/components/TableCouriers';

import { deleteCourierRequest } from '~/store/modules/couriers/actions';
import content from './content';

export default function Deliveries() {
  const dispatch = useDispatch();
  const [screen, setScreen] = useState('DEFAULT');
  const [courier, setCourier] = useState(0);

  const handleEditar = (item) => {
    setCourier(item);
    setScreen('EDIT');
  };

  const handleExcluir = (index) => {
    const confirmar = window.confirm(
      `Você realmente quer excluir o destinatário ${index}`
    );

    if (confirmar) {
      dispatch(deleteCourierRequest(index));
    }
  };

  const funcoes = {
    Editar: handleEditar,
    Excluir: handleExcluir,
  };

  return (
    <>
      <CourierForm
        operation={screen}
        backFunction={() => setScreen('DEFAULT')}
        registerFunction={() => setScreen('REGISTER')}
        courierIndex={courier}
      />
      {screen === 'DEFAULT' && (
        <TableCouriers operations={content} functions={funcoes} />
      )}
    </>
  );
}
