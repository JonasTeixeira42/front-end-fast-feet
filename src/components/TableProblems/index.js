/* eslint-disable react/forbid-prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DotsThreeHorizontal } from '@styled-icons/entypo/';
import PropTypes from 'prop-types';

import {
  fetchProblemsDeliveriesRequest,
  changeEnabledField,
} from '~/store/modules/problems/actions';

import Icons from '~/utils/icons';
import headers from './headers';

import * as S from '~/components/TableStyles';

export default function TableProblems({ operations, functions }) {
  const problems = useSelector((state) => state.problems);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProblemsDeliveriesRequest());
  }, []);

  const changeEnabled = (index) => {
    dispatch(changeEnabledField(index));
  };

  return (
    <S.TrableContainer role="table">
      <S.TableRow role="rowgroup">
        {headers.map((header, id) =>
          id === 1 ? (
            <S.HeaderCell length="66%" key={header} role="columnheader">
              {header}
            </S.HeaderCell>
          ) : (
            <S.HeaderCell length="20%" key={header} role="columnheader">
              {header}
            </S.HeaderCell>
          )
        )}
        <S.HeaderCell role="columnheader">Ações</S.HeaderCell>
      </S.TableRow>
      {Object.entries(problems).map(([key, value]) => (
        <S.TableRow key={key}>
          <S.BodyCell length="20%">{`#${value.delivery.id < 10 ? 0 : ''}${
            value.delivery.id
          }`}</S.BodyCell>
          <S.BodyCell overFlow length="66%">
            {value.description}
          </S.BodyCell>
          <S.BodyCell length="14%">
            <S.Wrapper teste={value.enabled}>
              <DotsThreeHorizontal
                size="16"
                color="#C6C6C6"
                onClick={() => changeEnabled(value.id)}
              />
              <S.PopOver
                popoverLength="225px"
                teste={value.enabled}
                right="-95px"
                bottom="-80px"
              >
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

TableProblems.propTypes = {
  operations: PropTypes.array.isRequired,
  functions: PropTypes.object.isRequired,
};
