/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { Plus } from '@styled-icons/boxicons-regular/Plus';
import { Check } from '@styled-icons/heroicons-outline/Check';
import { KeyboardArrowLeft as ArrowLeft } from '@styled-icons/material/KeyboardArrowLeft';

import * as S from './styles';

export default function SearchAndRegister({
  title,
  placeholder,
  operation,
  backFunction,
}) {
  return (
    <>
      {operation === 'DEFAULT' && (
        <S.Header>
          <S.Title>{title}</S.Title>
        </S.Header>
      )}
      <S.NavWrapper>
        {operation === 'DEFAULT' ? (
          <S.InputHeader placeholder={placeholder} />
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
            <S.ButtonText>
              {operation === 'DEFAULT' ? 'CADASTRAR' : 'SALVAR'}
            </S.ButtonText>
          </S.Button>
        </S.ButtonWrapper>
      </S.NavWrapper>
    </>
  );
}

SearchAndRegister.propTypes = {
  title: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  operation: PropTypes.string,
  backFunction: PropTypes.func.isRequired,
};

SearchAndRegister.defaultProps = {
  placeholder: 'Pesquisar...',
  operation: 'DEFAULT',
};
