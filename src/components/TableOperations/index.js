/* eslint-disable react/forbid-prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import ReactTooltip from 'react-tooltip';
import { DotsThreeHorizontal } from '@styled-icons/entypo/';
import PropTypes from 'prop-types';

import Icons from './icons';

import * as S from './styles';

export default function TableOperations({ operations, functions }) {
  return (
    <S.Wrapper>
      <DotsThreeHorizontal
        size="16"
        color="#C6C6C6"
        data-tip
        data-event="click"
      />
      <ReactTooltip
        // place="top"
        type="light"
        effect="solid"
        border
        borderColor="#ddd"
        globalEventOff="click"
        className="customeTheme"
        clickable
      >
        {operations.map((operation) => {
          const Icon = Icons[operation.operation];

          return (
            <S.OperationName
              key={operation.label}
              onClick={() =>
                functions[operation.operation](operation.operation)
              }
            >
              <S.IconWrapper>
                <Icon size={operation.size} color={operation.color} />
              </S.IconWrapper>
              {operation.label}
            </S.OperationName>
          );
        })}
      </ReactTooltip>
    </S.Wrapper>
  );
}

TableOperations.propTypes = {
  operations: PropTypes.array,
  functions: PropTypes.objectOf(PropTypes.func).isRequired,
};

TableOperations.defaultProps = {
  operations: [],
};
