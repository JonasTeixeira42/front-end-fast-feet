import styled from 'styled-components';

export const Wrapper = styled.header`
  width: 100%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ItemsWrapper = styled.div``;

export const MenuNavigationWrapper = styled.div`
  padding: 19px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MenuLinks = styled.div`
  padding-left: 30px;
`;

export const LogoWrapper = styled.div`
  padding: 0 30px;
  border-right: 1px solid #ddd;
`;

export const Logo = styled.img`
  width: 100%;
`;

export const LogoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-self: space-between;
  padding-right: 30px;
`;

export const Admin = styled.span`
  color: #666;
  font-weight: bold;
`;

export const LogoutText = styled.span`
  color: #de3b3b;
  margin-top: 5px;
`;
