/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { Plus } from '@styled-icons/boxicons-regular/Plus';

import * as S from './styles';

export default function SearchAndRegister({ title, placeholder, label }) {
  return (
    <>
      <S.Header>
        <S.Title>{title}</S.Title>
      </S.Header>
      <S.NavWrapper>
        <S.InputHeader placeholder={placeholder} />
        <S.Button>
          <S.IconWrapper>
            <Plus size="16" color="#fff" />
          </S.IconWrapper>
          <S.ButtonText>{label}</S.ButtonText>
        </S.Button>
      </S.NavWrapper>
    </>
  );
}

SearchAndRegister.propTypes = {
  title: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string,
};

SearchAndRegister.defaultProps = {
  placeholder: 'Pesquisar...',
  label: 'CADASTRAR',
};
