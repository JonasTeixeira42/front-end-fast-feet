/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Plus } from '@styled-icons/boxicons-regular/Plus';
import { Check } from '@styled-icons/heroicons-outline/Check';
import { KeyboardArrowLeft as ArrowLeft } from '@styled-icons/material/KeyboardArrowLeft';
import { Input, Form } from '@rocketseat/unform';

import * as S from './styles';

export default function RecipientForm({
  operation,
  backFunction,
  registerFunction,
  recipientIndex,
}) {
  const [cep, setCep] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const cepMask = (e) => {
    const value = e.target.value
      .replace(/\D/g, '')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{3})\d+?$/, '$1');
    setCep(value);
  };

  return (
    <S.Wrapper>
      <S.Header>
        <S.Title>Gerenciando destinatários</S.Title>
      </S.Header>
      <Form onSubmit={handleSubmit}>
        <S.NavWrapper>
          <S.Input placeholder="Buscar por destinatários" />
          <S.ButtonWrapper>
            {operation !== 'DEFAULT' && (
              <>
                <S.Button color="#CCC" onClick={() => backFunction()}>
                  <ArrowLeft size="16" color="#fff" />
                  VOLTAR
                </S.Button>
                <S.Button type="submit">
                  <Check size="16" color="#fff" />
                  SALVAR
                </S.Button>
              </>
            )}
            {operation === 'DEFAULT' && (
              <S.Button
                type="button"
                onClick={() => operation === 'DEFAULT' && registerFunction()}
              >
                <Plus size="16" color="#fff" />
                CADASTRAR
              </S.Button>
            )}
          </S.ButtonWrapper>
        </S.NavWrapper>
        <S.InputForm>
          <S.InputWrapper>
            <Input name="name" placeholder="Nome" label="Nome" />
          </S.InputWrapper>
          <S.Row>
            <S.InputWrapper width="70%">
              <Input name="rua" placeholder="Rua" label="Rua" />
            </S.InputWrapper>
            <S.InputWrapper width="15%">
              <Input name="numero" placeholder="Número" label="Número" />
            </S.InputWrapper>
            <S.InputWrapper width="15%">
              <Input
                name="complemento"
                placeholder="Complemento"
                label="Complemento"
              />
            </S.InputWrapper>
          </S.Row>
          <S.Row>
            <S.InputWrapper width="34%">
              <Input name="cidade" placeholder="Cidade" label="cidade" />
            </S.InputWrapper>
            <S.InputWrapper width="33%">
              <Input name="estado" placeholder="Estado" label="Estado" />
            </S.InputWrapper>
            <S.InputWrapper width="33%">
              <Input
                name="cep"
                placeholder="CEP"
                label="CEP"
                value={cep}
                onChange={cepMask}
              />
            </S.InputWrapper>
          </S.Row>
        </S.InputForm>
      </Form>
    </S.Wrapper>
  );
}

RecipientForm.propTypes = {
  operation: PropTypes.string,
  backFunction: PropTypes.func.isRequired,
  registerFunction: PropTypes.func.isRequired,
  recipientIndex: PropTypes.number,
};

RecipientForm.defaultProps = {
  operation: 'DEFAULT',
  recipientIndex: null,
};
