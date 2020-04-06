import React from 'react';

import links from './content';

import * as S from './styles';

export default function HeaderLinks() {
  return (
    <S.LinksWrapper>
      {links.map((link) => (
        <S.MenuItem key={link.label} to={link.url}>
          {link.label}
        </S.MenuItem>
      ))}
    </S.LinksWrapper>
  );
}
