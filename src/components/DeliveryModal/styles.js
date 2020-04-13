import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 25px;
`;

export const InformationWrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid #eeeeee;
  padding-bottom: 12px;
  margin-bottom: 7px;

  p {
    font-size: 16px;
    color: #666666;
    margin-bottom: 7px;

    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;

export const Title = styled.span`
  display: block;
  color: #444444;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 4px;
  margin-top: 8px;
`;

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 23px;
`;

export const SignatureImage = styled.img`
  width: 234px;
  height: 36px;
`;
