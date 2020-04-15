import React from 'react';
import Modal from 'react-awesome-modal';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import * as S from './styles';

export default function DeliveryProblemModal({ show, closeModal, index }) {
  const problems = useSelector((state) => state.problems);
  return (
    <Modal
      visible={show}
      width="450"
      effect="fadeInDown"
      onClickAway={() => closeModal()}
    >
      {problems[index] && (
        <S.Wrapper>
          <strong>VISUALIZAR PROBLEMA</strong>
          <S.ProblemText>{problems[index].description}</S.ProblemText>
        </S.Wrapper>
      )}
    </Modal>
  );
}

DeliveryProblemModal.propTypes = {
  show: PropTypes.bool,
  closeModal: PropTypes.func.isRequired,
  index: PropTypes.number,
};

DeliveryProblemModal.defaultProps = {
  show: false,
  index: 0,
};
