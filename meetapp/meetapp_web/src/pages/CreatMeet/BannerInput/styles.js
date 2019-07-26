import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100%;
  margin-bottom: 20px;

  label {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
    img {
      border: 0px solid;
      width: 900px;
      border-radius: 4px;
    }

    input {
      display: none;
    }
  }
`;
