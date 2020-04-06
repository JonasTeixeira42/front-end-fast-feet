/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import TableOperations from '~/components/TableOperations';

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
        <S.HeaderCell role="columnheader">Ações</S.HeaderCell>
      </S.TableRow>
      <S.TableRow>
        <S.BodyCell>Stonehenge, Windsor and Bath with Pub Lunch</S.BodyCell>
        <S.BodyCell>Stonehenge, Windsor and Bath with Pub Lunch</S.BodyCell>
        <S.BodyCell>Stonehenge, Windsor and Bath with Pub Lunch</S.BodyCell>
        <S.BodyCell>Stonehenge, Windsor and Bath with Pub Lunch</S.BodyCell>
        <S.BodyCell>Stonehenge, Windsor and Bath with Pub Lunch</S.BodyCell>
        <S.BodyCell>Stonehenge, Windsor and Bath with Pub Lunch</S.BodyCell>
        <S.BodyCell>
          <TableOperations />
        </S.BodyCell>
      </S.TableRow>
      <S.TableRow>
        <S.BodyCell>Stonehenge, Windsor and Bath with Pub Lunch</S.BodyCell>
        <S.BodyCell>Stonehenge, Windsor and Bath with Pub Lunch</S.BodyCell>
        <S.BodyCell>Stonehenge, Windsor and Bath with Pub Lunch</S.BodyCell>
        <S.BodyCell>Stonehenge, Windsor and Bath with Pub Lunch</S.BodyCell>
        <S.BodyCell>Stonehenge, Windsor and Bath with Pub Lunch</S.BodyCell>
        <S.BodyCell>Stonehenge, Windsor and Bath with Pub Lunch</S.BodyCell>
        <S.BodyCell>{children}</S.BodyCell>
      </S.TableRow>
    </S.TrableContainer>
  );
}
