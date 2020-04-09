import styled from 'styled-components';
import { lighten } from 'polished';
import media from 'styled-media-query';

export const Wrapper = styled.div``;

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
  background: ${(props) => lighten(0.32, props.color) || '#7159c1'};
  color: ${(props) => props.color || '#fff'};
  font-weight: bold;
  border-radius: 12px;
`;
export const Circle = styled.div`
  height: 10px;
  width: 10px;
  border-radius: 50%;
  margin-right: 6px;
  background: ${(props) => props.color || '#fff'};
`;
