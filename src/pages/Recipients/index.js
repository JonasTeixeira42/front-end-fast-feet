/* eslint-disable no-alert */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import RecipientForm from '~/components/RecipientForm';
import TableRecipients from '~/components/TableRecipients';

import { deleteRecipientRequest } from '~/store/modules/recipients/actions';
import content from './content';

export default function Deliveries() {
  const dispatch = useDispatch();
  const [screen, setScreen] = useState('DEFAULT');
  const [recipient, setRecipient] = useState(0);

  const handleEditar = (item) => {
    setRecipient(item);
    setScreen('EDIT');
  };

  const handleExcluir = (index) => {
    const confirmar = window.confirm(
      `Você realmente quer excluir o destinatário ${index}`
    );

    if (confirmar) {
      dispatch(deleteRecipientRequest(index));
    }
  };

  const funcoes = {
    Editar: handleEditar,
    Excluir: handleExcluir,
  };

  return (
    <>
      <RecipientForm
        operation={screen}
        backFunction={() => setScreen('DEFAULT')}
        registerFunction={() => setScreen('REGISTER')}
        recipientIndex={recipient}
      />
      {screen === 'DEFAULT' && (
        <TableRecipients operations={content} functions={funcoes} />
      )}
    </>
  );
}
