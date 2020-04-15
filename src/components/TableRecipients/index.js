/* eslint-disable react/forbid-prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DotsThreeHorizontal } from '@styled-icons/entypo/';
import PropTypes from 'prop-types';

import {
  fetchRecipientsRequest,
  changeEnabledField,
} from '~/store/modules/recipients/actions';

import Icons from '~/utils/icons';
import headers from './headers';

import * as S from '~/components/TableStyles';

export default function TableRecipients({ operations, functions }) {
  const recipients = useSelector((state) => state.recipients);
  const dispatch = useDispatch();
  const cellLength = ['14%', '20%', '52%'];

  useEffect(() => {
    dispatch(fetchRecipientsRequest());
  }, []);

  const changeEnabled = (index) => {
    dispatch(changeEnabledField(index));
  };

  return (
    <S.TrableContainer role="table">
      <S.TableRow>
        {headers.map((header, index) => (
          <S.HeaderCell
            length={cellLength[index]}
            key={header}
            role="columnheader"
          >
            {header}
          </S.HeaderCell>
        ))}
        <S.HeaderCell length="14%" role="columnheader">
          Ações
        </S.HeaderCell>
      </S.TableRow>
      {Object.entries(recipients).map(([key, value]) => (
        <S.TableRow key={key}>
          <S.BodyCell length="14%">{`#${value.id < 10 ? 0 : ''}${
            value.id
          }`}</S.BodyCell>
          <S.BodyCell length="20%">{value.name}</S.BodyCell>
          <S.BodyCell length="52%">{`${value.rua}, ${value.numero}, ${value.cidade} - ${value.estado}`}</S.BodyCell>
          <S.BodyCell length="14%">
            <S.Wrapper teste={value.enabled}>
              <DotsThreeHorizontal
                size="16"
                color="#C6C6C6"
                onClick={() => changeEnabled(value.id)}
              />
              <S.PopOver bottom="-80px" teste={value.enabled}>
                {operations.map((operation) => {
                  const Icon = Icons[operation.operation];
                  return (
                    <S.OperationName
                      key={operation.label}
                      onClick={() => functions[operation.operation](value.id)}
                    >
                      <S.IconWrapper>
                        <Icon size={operation.size} color={operation.color} />
                      </S.IconWrapper>
                      {operation.label}
                    </S.OperationName>
                  );
                })}
              </S.PopOver>
            </S.Wrapper>
          </S.BodyCell>
        </S.TableRow>
      ))}
    </S.TrableContainer>
  );
}

TableRecipients.propTypes = {
  operations: PropTypes.array.isRequired,
  functions: PropTypes.object.isRequired,
};
