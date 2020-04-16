import styled from 'styled-components';

export const Wrapper = styled.div`
  align-self: center;
  margin-bottom: 30px;

  label {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    img {
      height: 150px;
      width: 150px;
      border-radius: 50%;
      border: 1px dashed #dddddd;
    }

    input {
      display: none;
    }
  }
`;
