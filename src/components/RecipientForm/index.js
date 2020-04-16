/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { Plus } from '@styled-icons/boxicons-regular/Plus';
import { Check } from '@styled-icons/heroicons-outline/Check';
import { KeyboardArrowLeft as ArrowLeft } from '@styled-icons/material/KeyboardArrowLeft';
import { Input, Form } from '@rocketseat/unform';

import { cepMask } from '~/utils/format';
import {
  createRecipientRequest,
  editRecipientRequest,
} from '~/store/modules/recipients/actions';

import * as S from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  rua: Yup.string().required('Rua is required'),
  numero: Yup.number()
    .typeError('Numebro must be a number')
    .positive('Numero must be positive')
    .integer('Numero must be an integer')
    .required('Age is required'),
  complemento: Yup.string(),
  estado: Yup.string()
    .required('Estado is required')
    .max(2, 'Maximum character numer is 2'),
  cidade: Yup.string().required('Cidade is required'),
  cep: Yup.string().required('CEP is required').min(9, 'CEP inválido'),
});

export default function RecipientForm({
  operation,
  backFunction,
  registerFunction,
  recipientIndex,
}) {
  const [cepState, setCep] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (data) => {
    dispatch(
      operation === 'REGISTER'
        ? createRecipientRequest(data)
        : editRecipientRequest({ ...data, id: recipientIndex })
    );
  };

  const handleCepChange = (e) => {
    const value = cepMask(e.target.value);
    setCep(value);
  };

  return (
    <S.Wrapper>
      {operation === 'DEFAULT' && (
        <S.Header>
          <S.Title>
            {operation === 'EDIT' ? 'Edição de ' : 'Gerenciando'} destinatários
          </S.Title>
        </S.Header>
      )}
      <Form
        schema={operation === 'REGISTER' ? schema : undefined}
        onSubmit={handleSubmit}
      >
        <S.NavWrapper>
          {operation === 'DEFAULT' ? (
            <S.Input placeholder="Buscar por destinatários" />
          ) : (
            <S.Title>
              {operation === 'EDIT' ? 'Edição de ' : 'Gerenciando'}{' '}
              destinatários
            </S.Title>
          )}
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
        {operation !== 'DEFAULT' && (
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
                  value={cepState}
                  onChange={handleCepChange}
                />
              </S.InputWrapper>
            </S.Row>
          </S.InputForm>
        )}
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
