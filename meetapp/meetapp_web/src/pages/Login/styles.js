import styled from 'styled-components';

import { darken } from 'polished';

export const Button = styled.button.attrs({
  type: 'submit',
})`
  width: 100%;
  margin: 5px 0 0;
  height: 44px;
  background: #339431;
  font-weight: bold;
  color: #fff;
  border: 0;
  border-radius: 18px;
  font-size: 16px;
  transition: background 0.2s;

  &:hover {
    background: ${darken(0.06, '#339431')};
  }
`;
