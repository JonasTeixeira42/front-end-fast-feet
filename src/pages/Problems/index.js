/* eslint-disable no-alert */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import TableProblems from '~/components/TableProblems';
import DeliveryProblemModal from '~/components/DeliveryProblemModal';

import content from './content';
import { deleteDeliveryRequest } from '~/store/modules/problems/actions';

import * as S from './styles';

export default function Problems() {
  const [showModal, setShowModal] = useState(false);
  const [problem, setProblem] = useState(0);

  const dispatch = useDispatch();

  const handleVisualizar = (item) => {
    setProblem(item);
    setShowModal(true);
  };

  const handleExcluir = (index, deliveryIndex) => {
    const confirmar = window.confirm(
      `Você realmente quer cancelar a encomenda ${index}`
    );

    if (confirmar) {
      dispatch(deleteDeliveryRequest(deliveryIndex));
    }
  };

  const funcoes = {
    Visualizar: handleVisualizar,
    Excluir: handleExcluir,
  };

  return (
    <S.Wrapper>
      <S.Header>Problemas na entrega</S.Header>
      <DeliveryProblemModal
        show={showModal}
        closeModal={() => setShowModal(false)}
        index={problem}
      />
      <TableProblems operations={content} functions={funcoes} />
    </S.Wrapper>
  );
}
