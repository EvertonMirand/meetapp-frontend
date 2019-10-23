import styled from 'styled-components';
import Colors from '~/theme/Colors';

export const Container = styled.div`
  max-width: 920px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;

  img {
    border-radius: 4px;
    height: 300px;
    object-fit: cover;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    .react-datepicker__input-container {
      position: relative;
      display: inline-block;
      width: 100%;
      input {
        width: 100%;
      }
    }

    input,
    textarea {
      background: ${Colors.inputBackground};
      border: 0;
      border-radius: 4px;
      color: ${Colors.defaultText};
      margin: 0 0 10px;
      font-size: 18px;

      &::placeholder {
        color: ${Colors.placeholder};
      }
    }

    input {
      height: 44px;
      padding: 0 15px;
    }

    span {
      color: ${Colors.span};
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    textarea {
      height: 200px;
      padding: 15px 15px;
      font-size: 18px;
    }

    > button {
      display: flex;
      align-content: center;
      align-items: center;
      align-self: flex-end;
      /* width: 162px; */
      padding: 0 25px;
      margin: 5px 0 0;
      margin-top: 10px;
      height: 42px;
      font-weight: bold;

      svg {
        margin-right: 5px;
      }
    }
  }
`;
