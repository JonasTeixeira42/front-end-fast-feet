import React from 'react';

import HeaderLinks from '~/components/HeaderLinks';

import * as S from './styles';
import logo from '~/assets/fastFeetLogo.svg';

export default function Header() {
  return (
    <S.Wrapper>
      <S.ItemsWrapper>
        <S.MenuNavigationWrapper>
          <S.LogoWrapper>
            <S.Logo src={logo} alt="logo fast feet" />
          </S.LogoWrapper>

          <S.MenuLinks>
            <HeaderLinks />
          </S.MenuLinks>
        </S.MenuNavigationWrapper>
      </S.ItemsWrapper>
      <S.ItemsWrapper>teste2</S.ItemsWrapper>
    </S.Wrapper>
  );
}
