import styled from 'styled-components';

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

    input,
    textarea {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      color: #fff;
      margin: 0 0 10px;
      font-size: 18px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.5);
      }
    }

    input {
      height: 44px;
      padding: 0 15px;
    }

    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    textarea {
      height: 200px;
      padding: 15px 15px;
      font-size: 18px;
    }
  }
`;
