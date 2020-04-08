import React from 'react';
import { useDispatch } from 'react-redux';

import HeaderLinks from '~/components/HeaderLinks';
import { signOut } from '~/store/modules/auth/actions';

import * as S from './styles';
import logo from '~/assets/fastFeetLogo.svg';

export default function Header() {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(signOut());
  };
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
      <S.ItemsWrapper>
        <S.LogoutWrapper>
          <S.Admin>Admin FastFeet</S.Admin>
          <S.LogoutText onClick={handleLogout}>sair do sistema</S.LogoutText>
        </S.LogoutWrapper>
      </S.ItemsWrapper>
    </S.Wrapper>
  );
}
