/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import AsyncSelect from 'react-select/async';
import { Plus } from '@styled-icons/boxicons-regular/Plus';
import { Check } from '@styled-icons/heroicons-outline/Check';
import { KeyboardArrowLeft as ArrowLeft } from '@styled-icons/material/KeyboardArrowLeft';

import * as S from './styles';

import api from '~/services/api';

export default function RegisterDelivery({
  title,
  operation,
  backFunction,
  registerFunction,
}) {
  const [couriers, setCouriers] = useState([]);
  const [recipients, setRecipients] = useState([]);

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
    console.log('SUBMITOU');
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
              />
            </S.InputWrapper>
            <S.InputWrapper>
              <S.InputLabel>Entregadores</S.InputLabel>
              <AsyncSelect
                className="select-input"
                placeholder="Entregador"
                defaultOptions={couriers}
              />
            </S.InputWrapper>
          </S.SelectWrapper>
          <S.LastInput>
            <S.InputLabel>Entregadores</S.InputLabel>
            <S.Input
              className="select-input"
              placeholder="Entregador"
              defaultOptions={couriers}
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
