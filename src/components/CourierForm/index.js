/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { Plus } from '@styled-icons/boxicons-regular/Plus';
import { Check } from '@styled-icons/heroicons-outline/Check';
import { KeyboardArrowLeft as ArrowLeft } from '@styled-icons/material/KeyboardArrowLeft';
import { Input, Form } from '@rocketseat/unform';

import {
  createCourierRequest,
  editCourierRequest,
} from '~/store/modules/couriers/actions';
import Avatar from './AvatarInput';

import * as S from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  avatar_id: Yup.number()
    .typeError('Avatar_id must be a number')
    .positive('Avatar_id must be positive')
    .integer('Avatar_id must be an integer'),
  email: Yup.string()
    .required('Email is required')
    .email('Email must be a valid email format'),
});

export default function CourierForm({
  operation,
  backFunction,
  registerFunction,
  courierIndex,
}) {
  const dispatch = useDispatch();
  const couriers = useSelector((state) => state.couriers);

  const handleSubmit = (data) => {
    dispatch(
      operation === 'REGISTER'
        ? createCourierRequest(data)
        : editCourierRequest({ ...data, id: courierIndex })
    );
  };

  return (
    <S.Wrapper>
      {operation === 'DEFAULT' && (
        <S.Header>
          <S.Title>
            {operation === 'EDIT' ? 'Edição de ' : 'Gerenciando'} entregadores
          </S.Title>
        </S.Header>
      )}
      <Form
        initialData={operation === 'EDIT' ? couriers[courierIndex] : {}}
        schema={operation === 'REGISTER' ? schema : undefined}
        onSubmit={handleSubmit}
      >
        <S.NavWrapper>
          {operation === 'DEFAULT' ? (
            <S.Input placeholder="Buscar por entregadores" />
          ) : (
            <S.Title>
              {operation === 'EDIT' ? 'Edição de ' : 'Gerenciando'} entregadores
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
            <Avatar name="avatar_id" />
            <S.InputWrapper>
              <Input name="name" placeholder="Nome" label="Nome" />
            </S.InputWrapper>
            <S.InputWrapper>
              <Input
                name="email"
                placeholder="example@fastfeet.com"
                label="Email"
              />
            </S.InputWrapper>
          </S.InputForm>
        )}
      </Form>
    </S.Wrapper>
  );
}

CourierForm.propTypes = {
  operation: PropTypes.string,
  backFunction: PropTypes.func.isRequired,
  registerFunction: PropTypes.func.isRequired,
  courierIndex: PropTypes.number,
};

CourierForm.defaultProps = {
  operation: 'DEFAULT',
  courierIndex: null,
};
