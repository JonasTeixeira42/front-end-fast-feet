import styled from 'styled-components';
import media from 'styled-media-query';
import { darken } from 'polished';

export const TrableContainer = styled.div`
  display: block;
  margin: 22px auto;
  width: 100%;
  min-height: 100vh;
  max-width: 1180px;
  padding-bottom: 40px;
`;

export const TableRow = styled.div`
  display: flex;
  flex-flow: row wrap;
  border: 1px solid black;
  border: 0;
  margin-bottom: 20px;
`;

export const HeaderCell = styled.div`
  width: calc(100% / 7);
  text-align: left;
  padding: 18px 25px;
  color: #444444;
  font-size: 18px;
  font-weight: bold;

  &:last-of-type {
    text-align: center;
  }

  ${media.lessThan('medium')`
    width: 100%;
    text-align: center;

    &:last-of-type {
      text-align: center;
    }
  `}
`;

export const BodyCell = styled.div`
  width: calc(100% / 7);
  text-align: left;
  padding: 18px 25px;
  color: #666;
  background: #fff;

  &:first-of-type {
    border-radius: 4px 0 0 4px;
  }

  &:last-of-type {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0 4px 4px 0;
  }

  ${media.lessThan('medium')`
    width: 100%;
    text-align: center;

    &:last-of-type {
      text-align: center;
      border-radius: 4px 4px 0 0;
      border-bottom: 15px solid #f5f5f5;
    }
  `}
`;

export const StatusWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 0;
  background: ${(props) => props.color || '#7159c1'};
  color: ${(props) => darken(0.3, props.color) || '#fff'};
  font-weight: bold;
  border-radius: 12px;
  min-width: 125px;
`;
export const Circle = styled.div`
  height: 10px;
  width: 10px;
  border-radius: 50%;
  margin-right: 6px;
  background: ${(props) => darken(0.3, props.color) || '#fff'};
`;
export const Wrapper = styled.div`
  padding: 5px;
  position: relative;

  svg {
    cursor: pointer;
  }

  &::before {
    background-color: #fff;
    border-top: 1px solid #00000026;
    border-left: 1px solid #00000026;
    content: '';
    display: ${(props) => (props.teste ? 'block' : 'none')};
    position: absolute;
    width: 10px;
    height: 10px;
    z-index: 1000;
    transform: translate(-50%, calc(-100% - 5px)) rotate(45deg);
    margin: 0 auto;
    bottom: -23px;
    left: 13px;
    text-align: center;
  }
`;

export const PopOver = styled.div`
  background-color: #fff;
  border-radius: 6px;
  border: 1px solid #00000026;
  display: ${(props) => (props.teste ? 'block' : 'none')};
  padding: 10px 15px;
  position: absolute;
  text-align: center;
  z-index: 999;
  right: -60px;
  bottom: -110px;
`;

export const OperationName = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #999;
  border-bottom: 1px solid #ddd;
  min-width: 115px;
  cursor: pointer;
  padding: 5px 0;

  &:last-of-type {
    border: 0;
  }
`;
export const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  margin-right: 6px;
`;
