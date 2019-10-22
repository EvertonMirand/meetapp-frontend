import styled from 'styled-components';
import { darken } from 'polished';
import Colors from '~/theme/Colors';

export const Wrapper = styled.div`
  height: 100%;
  min-height: 100vh;
  overflow: auto;
  background: linear-gradient(
    90deg,
    ${Colors.backgroundPrimary},
    ${Colors.backgroundSecundary}
  );
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: ${Colors.inputBackground};
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: ${Colors.defaultText};
      margin: 0 0 10px;

      &::placeholder {
        color: ${Colors.placeholder};
      }
    }

    span {
      color: ${Colors.span};
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
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
    }

    a {
      color: ${Colors.link};
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
