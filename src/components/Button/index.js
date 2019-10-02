import styled from 'styled-components';
import { darken } from 'polished';
import Colors from '~/theme/Colors';

const Button = styled.button`
  height: 44px;
  width: 71px;
  background: ${Colors.buttonBackground};
  font-weight: 600;
  color: ${Colors.defaultText};
  border: 0;
  border-radius: 4px;
  font-size: 16px;

  transition: backgroung 0.2s;

  &:hover {
    background: ${darken(0.03, Colors.buttonBackground)};
  }
`;

export default Button;
