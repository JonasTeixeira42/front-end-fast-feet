/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import ReactTooltip from 'react-tooltip';
import { DotsThreeHorizontal } from '@styled-icons/entypo/';

import * as S from './styles';

export default function TableOperations() {
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
        border="true"
        borderColor="#ddd"
        globalEventOff="click"
      >
        <p>teste</p>
      </ReactTooltip>
    </>
  );
}
