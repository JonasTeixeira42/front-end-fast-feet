/* eslint-disable react/forbid-prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DotsThreeHorizontal } from '@styled-icons/entypo/';
import PropTypes from 'prop-types';

import {
  fetchCouriersRequest,
  changeEnabledField,
} from '~/store/modules/couriers/actions';

import Icons from '~/utils/icons';
import headers from './headers';
import pictureColors from '~/utils/colors';

import * as S from '~/components/TableStyles';

export default function TableCouriers({ operations, functions }) {
  const couriers = useSelector((state) => state.couriers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCouriersRequest());
  }, []);

  const changeEnabled = (index) => {
    dispatch(changeEnabledField(index));
  };

  return (
    <S.TrableContainer role="table">
      <S.TableRow>
        {headers.map((header) => (
          <S.HeaderCell length="21.5%" key={header} role="columnheader">
            {header}
          </S.HeaderCell>
        ))}
        <S.HeaderCell length="14%" role="columnheader">
          Ações
        </S.HeaderCell>
      </S.TableRow>
      {Object.entries(couriers).map(([key, value]) => (
        <S.TableRow key={key}>
          <S.BodyCell length="21.5%">{`#${value.id < 10 ? 0 : ''}${
            value.id
          }`}</S.BodyCell>
          <S.BodyCell length="21.5%">
            {value.avatar ? (
              <S.CircleImage src={value.avatar.url} />
            ) : (
              <S.CirclePicture color={pictureColors[value.id % 6]}>
                {value.name.charAt(0).toUpperCase()}
              </S.CirclePicture>
            )}
          </S.BodyCell>
          <S.BodyCell length="21.5%">{value.name}</S.BodyCell>
          <S.BodyCell length="21.5%">{value.email}</S.BodyCell>
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

TableCouriers.propTypes = {
  operations: PropTypes.array.isRequired,
  functions: PropTypes.object.isRequired,
};
