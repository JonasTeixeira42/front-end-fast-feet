import styled from 'styled-components';

export const Wrapper = styled.div`
  svg {
    cursor: pointer;
  }
`;

export const OperationName = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #999;
  border-bottom: 1px solid #ddd;
  padding: 15px 0 11px;
  margin: 0 10px;
  min-width: 150px;
  cursor: pointer;

  &:last-of-type {
    border: 0;
  }
`;
export const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  margin-right: 6px;
`;
