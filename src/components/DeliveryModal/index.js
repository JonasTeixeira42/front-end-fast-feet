/* eslint-disable react/forbid-prop-types */
import React from 'react';
import Modal from 'react-awesome-modal';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { cepFormatter, dataFormatter } from '~/utils/format';

import * as S from './styles';

export default function DeliveryModal({ show, closeModal, index }) {
  const deliveries = useSelector((state) => state.deliveries);
  return (
    <>
      <Modal
        visible={show}
        width="450"
        effect="fadeInDown"
        onClickAway={() => closeModal()}
      >
        {deliveries[index] && (
          <S.Wrapper>
            <S.InformationWrapper>
              <S.Title>Informações da encomenda</S.Title>
              <p>{`${deliveries[index].recipient.rua} - ${deliveries[index].recipient.numero}`}</p>
              <p>{`${deliveries[index].recipient.cidade} - ${deliveries[index].recipient.estado}`}</p>
              <p>{cepFormatter(deliveries[index].recipient.cep)}</p>
            </S.InformationWrapper>
            <S.InformationWrapper>
              <S.Title>Datas</S.Title>
              <p>
                <strong>Retirada: </strong>
                {deliveries[index].start_date
                  ? dataFormatter(deliveries[index].start_date)
                  : 'Não retirada'}
              </p>
              <p>
                <strong>Entrega: </strong>
                {deliveries[index].end_date
                  ? dataFormatter(deliveries[index].end_date)
                  : 'Não entregue'}
              </p>
            </S.InformationWrapper>
            <S.InformationWrapper>
              <S.Title>Assinatura</S.Title>
              {deliveries[index].signature && (
                <S.ImageWrapper>
                  <S.SignatureImage src={deliveries[index].signature.url} />
                </S.ImageWrapper>
              )}
            </S.InformationWrapper>
          </S.Wrapper>
        )}
      </Modal>
    </>
  );
}

DeliveryModal.propTypes = {
  show: PropTypes.bool,
  closeModal: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

DeliveryModal.defaultProps = {
  show: false,
};
