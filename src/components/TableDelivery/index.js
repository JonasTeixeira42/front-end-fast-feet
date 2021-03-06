/* eslint-disable react/forbid-prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DotsThreeHorizontal } from '@styled-icons/entypo/';
import PropTypes from 'prop-types';

import * as S from '~/components/TableStyles';

import {
  fetchDeliveriesRequest,
  changeEnabledField,
} from '~/store/modules/deliveries/actions';

import colorStatus from './colors';
import Icons from '~/utils/icons';
import headers from './headers';
import pictureColors from '~/utils/colors';

export default function TableDelivery({ operations, functions }) {
  const deliveries = useSelector((state) => state.deliveries);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDeliveriesRequest());
  }, []);

  const changeEnabled = (index) => {
    dispatch(changeEnabledField(index));
  };

  return (
    <S.TrableContainer role="table">
      <S.TableRow role="rowgroup">
        {headers.map((header) => (
          <S.HeaderCell length="14.28%" key={header} role="columnheader">
            {header}
          </S.HeaderCell>
        ))}
        <S.HeaderCell role="columnheader">Ações</S.HeaderCell>
      </S.TableRow>
      {Object.entries(deliveries).map(([key, value]) => (
        <S.TableRow key={key}>
          <S.BodyCell length="14.27%">{`#${value.id < 10 ? 0 : ''}${
            value.id
          }`}</S.BodyCell>
          <S.BodyCell length="14.27%">{value.recipient.name}</S.BodyCell>
          <S.BodyCell length="14.27%">
            <S.PictureWrapper>
              {value.courier.avatar ? (
                <S.CircleImage src={value.courier.avatar.url} />
              ) : (
                <S.CirclePicture color={pictureColors[value.courier.id % 6]}>
                  {value.courier.name.charAt(0).toUpperCase()}
                </S.CirclePicture>
              )}
              {value.courier.name}
            </S.PictureWrapper>
          </S.BodyCell>
          <S.BodyCell length="14.27%">{value.recipient.cidade}</S.BodyCell>
          <S.BodyCell length="14.27%">{value.recipient.estado}</S.BodyCell>
          <S.BodyCell length="14.27%">
            <S.StatusWrapper color={colorStatus[value.status]}>
              <S.Circle color={colorStatus[value.status]} />
              {value.status}
            </S.StatusWrapper>
          </S.BodyCell>
          <S.BodyCell length="14.27%">
            <S.Wrapper teste={value.enabled}>
              <DotsThreeHorizontal
                size="16"
                color="#C6C6C6"
                onClick={() => changeEnabled(value.id)}
              />
              <S.PopOver teste={value.enabled}>
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

TableDelivery.propTypes = {
  operations: PropTypes.array.isRequired,
  functions: PropTypes.object.isRequired,
};
