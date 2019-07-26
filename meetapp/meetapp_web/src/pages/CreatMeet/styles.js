import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 900px;
  margin: 30px auto;

  form {
    display: flex;
    flex-direction: column;
    input {
      width: 100%;
      background: rgba(0, 0, 0, 0.4);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;
      transition: border 0.2s;
      &:focus {
        border: 1px solid #cecece;
      }
      &::placeholder {
        padding: 0 !important;
        color: #fff;
        opacity: 0.5;
      }
    }
  }
  textarea {
    max-width: 900px;
    padding: 15px !important;
    &::placeholder {
      padding: 0 !important;
    }
  }
  span {
    color: #f94d6a;
    align-self: flex-start;
    margin: 0 0 10px;
    font-weight: bold;
  }

  textarea {
    background: rgba(0, 0, 0, 0.4);
    border: 0;
    border-radius: 4px;
    height: 150px;
    padding: 0 15px;
    color: #fff;
    margin: 0 0 10px;
    transition: border 0.2s;
    &:focus {
      border: 1px solid #cecece;
    }
    &::placeholder {
      padding: 15px 0;
      color: rgba(255, 255, 255, 0.5);
    }
  }

  div {
    max-width: 900px;
    div {
      max-width: 900px;
      input {
        width: 900px;
      }
    }
  }
`;
export const ButtonSub = styled.button`
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
`;
