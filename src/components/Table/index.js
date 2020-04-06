import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

export default function Table({ children }) {
  return (
    <S.TrableContainer role="table">
      <S.TableRow role="rowgroup">
        <S.HeaderCell role="columnheader">ID</S.HeaderCell>
        <S.HeaderCell role="columnheader">Destinatario</S.HeaderCell>
        <S.HeaderCell role="columnheader">Entregador</S.HeaderCell>
        <S.HeaderCell role="columnheader">Cidade</S.HeaderCell>
        <S.HeaderCell role="columnheader">Estado</S.HeaderCell>
        <S.HeaderCell role="columnheader">Status</S.HeaderCell>
        {children && <S.HeaderCell role="columnheader">Ações</S.HeaderCell>}
      </S.TableRow>
      <S.TableRow>
        <S.BodyCell>Stonehenge, Windsor and Bath with Pub Lunch</S.BodyCell>
        <S.BodyCell>Stonehenge, Windsor and Bath with Pub Lunch</S.BodyCell>
        <S.BodyCell>Stonehenge, Windsor and Bath with Pub Lunch</S.BodyCell>
        <S.BodyCell>Stonehenge, Windsor and Bath with Pub Lunch</S.BodyCell>
        <S.BodyCell>Stonehenge, Windsor and Bath with Pub Lunch</S.BodyCell>
        <S.BodyCell>Stonehenge, Windsor and Bath with Pub Lunch</S.BodyCell>
        {children && <S.BodyCell>{children}</S.BodyCell>}
      </S.TableRow>
    </S.TrableContainer>
  );
}

Table.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
};
