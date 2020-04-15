/* eslint-disable no-alert */
import React, { useState } from 'react';
import RecipientForm from '~/components/RecipientForm';
import TableRecipients from '~/components/TableRecipients';

import content from './content';

export default function Deliveries() {
  const [screen, setScreen] = useState('DEFAULT');
  const [recipient, setRecipient] = useState(0);

  const handleEditar = (item) => {
    setRecipient(item);
    setScreen('EDIT');
  };

  const handleExcluir = (index) => {
    const confirmar = window.confirm(
      `Você realmente quer excluir a encomenda ${index}`
    );

    if (confirmar) {
      // dispatch(deleteDeliveryRequest(index));
    }
  };

  const funcoes = {
    Editar: handleEditar,
    Excluir: handleExcluir,
  };

  return (
    <>
      <RecipientForm />
      {screen === 'DEFAULT' && (
        <TableRecipients operations={content} functions={funcoes} />
      )}
    </>
  );
}
