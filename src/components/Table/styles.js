import styled from 'styled-components';
import media from 'styled-media-query';

export const TrableContainer = styled.div`
  display: block;
  margin: 22px auto;
  width: 100%;
  max-width: 1180px;
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
  border-radius: 4px;

  &:last-of-type {
    display: flex;
    align-items: center;
    justify-content: center;
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
