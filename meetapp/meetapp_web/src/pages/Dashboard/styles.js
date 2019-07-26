import styled from 'styled-components';

import { darken } from 'polished';

export const Container = styled.div`
  max-width: 900px;
  margin: 25px auto;
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    h2 {
      font-size: 35px;
      color: #fff;
    }

    button {
      width: 200px;
      height: 40px;
      border-radius: 5px;
      background: #339431;
      color: #fff;
      font-size: 20px;
      font-weight: bold;
      border: 0;
      -webkit-box-shadow: 0px 0px 12px -2px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 0px 0px 12px -2px rgba(0, 0, 0, 0.75);
      box-shadow: 0px 0px 12px -2px rgba(0, 0, 0, 0.75);
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.06, '#339431')};
      }
    }
  }

  header {
    margin-top: 10px;
    display: flex;
    align-self: center;
    align-items: center;

    button {
      border: 0;
      background: none;
      padding-top: 4px;
    }

    strong {
      color: #fff;
      font-size: 28px;
      margin: 0 22px;
    }
  }

  ul {
    display: grid;
    grid-gap: 20px;
    margin-top: 30px;
  }
`;

export const Meet = styled.li`
  height: 100px;
  padding: 15px;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: space-between;

  opacity: ${props => (props.past ? 0.6 : 1)};

  strong {
    color: #fff;
    font-size: 20px;
    font-weight: bold;
  }
  div {
    display: flex;
    align-items: center;
    span {
      color: #fff;
      text-decoration: none;
    }
  }
`;
