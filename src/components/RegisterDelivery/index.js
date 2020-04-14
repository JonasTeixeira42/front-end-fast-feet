/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import AsyncSelect from 'react-select/async';
import { Plus } from '@styled-icons/boxicons-regular/Plus';
import { Check } from '@styled-icons/heroicons-outline/Check';
import { KeyboardArrowLeft as ArrowLeft } from '@styled-icons/material/KeyboardArrowLeft';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';

import * as S from './styles';

import api from '~/services/api';
import { createDeliveryRequest } from '~/store/modules/deliveries/actions';

export default function RegisterDelivery({
  title,
  operation,
  backFunction,
  registerFunction,
}) {
  const dispatch = useDispatch();
  const [couriers, setCouriers] = useState([]);
  const [recipients, setRecipients] = useState([]);

  const [courier, setCourier] = useState(0);
  const [recipient, setRecipient] = useState(0);
  const [product, setProduct] = useState('');

  useEffect(() => {
    const teste = async () => {
      const [courierResponse, recipientResponse] = await Promise.all([
        api.get('courier'),
        api.get('recipient'),
      ]);

      setCouriers(courierResponse.data);
      setRecipients(recipientResponse.data);
    };

    teste();
  }, []);

  const submitHandler = () => {
    if (operation === 'REGISTER') {
      if (!courier) {
        toast.error('Selecione um entregador');
        return;
      }

      if (!recipient) {
        toast.error('Selecione um destinatário');
        return;
      }

      if (!product) {
        toast.error('Digite o nome do produto');
        return;
      }

      dispatch(createDeliveryRequest(courier, recipient, product));
      return;
    }

    console.log('olaaaaaa');
  };

  return (
    <>
      {operation === 'DEFAULT' && (
        <S.Header>
          <S.Title>{title}</S.Title>
        </S.Header>
      )}
      <S.NavWrapper>
        {operation === 'DEFAULT' ? (
          <S.InputHeader placeholder="Buscar por encomendas" />
        ) : (
          <S.Title>{title}</S.Title>
        )}
        <S.ButtonWrapper>
          {operation !== 'DEFAULT' && (
            <S.Button color="#CCC" onClick={backFunction}>
              <S.IconWrapper>
                <ArrowLeft size="16" color="#fff" />
              </S.IconWrapper>
              <S.ButtonText>VOLTAR</S.ButtonText>
            </S.Button>
          )}
          <S.Button>
            <S.IconWrapper>
              {operation === 'DEFAULT' ? (
                <Plus size="16" color="#fff" />
              ) : (
                <Check size="16" color="#fff" />
              )}
            </S.IconWrapper>
            <S.ButtonText
              onClick={() =>
                operation === 'DEFAULT' ? registerFunction() : submitHandler()
              }
            >
              {operation === 'DEFAULT' ? 'CADASTRAR' : 'SALVAR'}
            </S.ButtonText>
          </S.Button>
        </S.ButtonWrapper>
      </S.NavWrapper>
      {operation !== 'DEFAULT' && (
        <S.FormWrapper>
          <S.SelectWrapper>
            <S.InputWrapper>
              <S.InputLabel>Destinatários</S.InputLabel>
              <AsyncSelect
                className="select-input"
                placeholder="Destinatário"
                defaultOptions={recipients}
                onChange={(e) => setRecipient(e.value)}
              />
            </S.InputWrapper>
            <S.InputWrapper>
              <S.InputLabel>Entregadores</S.InputLabel>
              <AsyncSelect
                className="select-input"
                placeholder="Entregador"
                defaultOptions={couriers}
                onChange={(e) => setCourier(e.value)}
              />
            </S.InputWrapper>
          </S.SelectWrapper>
          <S.LastInput>
            <S.InputLabel>Nome do produto</S.InputLabel>
            <S.Input
              className="select-input"
              placeholder="Produto"
              onChange={(e) => setProduct(e.target.value)}
            />
          </S.LastInput>
        </S.FormWrapper>
      )}
    </>
  );
}

RegisterDelivery.propTypes = {
  title: PropTypes.string.isRequired,
  operation: PropTypes.string,
  backFunction: PropTypes.func.isRequired,
  registerFunction: PropTypes.func.isRequired,
};

RegisterDelivery.defaultProps = {
  operation: 'DEFAULT',
};
