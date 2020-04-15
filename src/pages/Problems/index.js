/* eslint-disable no-alert */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import TableProblems from '~/components/TableProblems';

import content from './content';
import { deleteDeliveryRequest } from '~/store/modules/deliveries/actions';

import * as S from './styles';

export default function Problems() {
  const [showModal, setShowModal] = useState(false);
  const [delivery, setDelivery] = useState(0);

  const dispatch = useDispatch();

  const handleVisualizar = (item) => {
    setDelivery(item);
    setShowModal(true);
  };

  const handleExcluir = (index) => {
    const confirmar = window.confirm(
      `Você realmente quer cancelar a encomenda ${index}`
    );

    if (confirmar) {
      dispatch(deleteDeliveryRequest(index));
    }
  };

  const funcoes = {
    Visualizar: handleVisualizar,
    Excluir: handleExcluir,
  };

  return (
    <S.Wrapper>
      <S.Header>Problemas na entrega</S.Header>
      <TableProblems operations={content} functions={funcoes} />
    </S.Wrapper>
  );
}
