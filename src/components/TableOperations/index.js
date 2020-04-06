/* eslint-disable react/forbid-prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import ReactTooltip from 'react-tooltip';
import { DotsThreeHorizontal } from '@styled-icons/entypo/';
import PropTypes from 'prop-types';

import Icons from './icons';

import * as S from './styles';

export default function TableOperations({ operations }) {
  return (
    <>
      <DotsThreeHorizontal
        size="16"
        color="#C6C6C6"
        data-tip
        data-event="click"
      />
      <ReactTooltip
        place="bottom"
        type="light"
        effect="solid"
        border
        borderColor="#ddd"
        globalEventOff="click"
        className="customeTheme"
      >
        {operations.map((operation) => {
          const Icon = Icons[operation.operation];

          return (
            <S.OperationName key={operation.label}>
              <S.IconWrapper>
                <Icon size={operation.size} color={operation.color} />
              </S.IconWrapper>
              {operation.label}
            </S.OperationName>
          );
        })}
      </ReactTooltip>
    </>
  );
}

TableOperations.propTypes = {
  operations: PropTypes.array,
};

TableOperations.defaultProps = {
  operations: [],
};
