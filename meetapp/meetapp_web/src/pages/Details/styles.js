import styled from 'styled-components';
import { darken } from 'polished';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 900px;
  margin: 10px auto 0;
  header {
    padding: 5px;
    div {
      display: flex;
      flex-direction: row;
      padding-bottom: 5px;
      max-width: 900px;
      justify-content: space-between;

      button {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
        width: 110px;
        font-size: 18px;
        border: 0;
        background: #4dbaf9;
        border-radius: 4px;
        color: #fff;
        font-weight: bold;
        transition: background 0.2s;

        &:hover {
          background: ${darken(0.09, '#4dbaf9')};
        }
      }
      > button {
        padding: 10px;
        width: 110px;
        background: #d44059;
        border: 0;
        transition: background 0.2s;

        &:hover {
          background: ${darken(0.08, '#d44059')};
        }
      }
    }
    img {
      border-radius: 4px;
      border: 0;
      width: 890px;
    }
  }

  h1 {
    font-size: 30px;
    color: #fff;
  }

  strong {
    padding-top: 10px;
    font-size: 20px;
    color: #fff;
  }
`;

export const Loc = styled.div`
  padding-top: 30px;
  align-items: center;

  span {
    display: flex;
    font-size: 16px;
    color: #fff;
  }
`;
