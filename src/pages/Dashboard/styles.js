import styled from 'styled-components';

export const Container = styled.div`
  max-width: 920px;
  margin: 50px auto;
  flex-direction: row;

  header {
    margin: 10px;
    display: flex;
    justify-content: space-between;

    h1 {
      color: #fff;
      font-size: 32px;
      font-weight: bold;
    }

    button {
      height: 44px;
      font-weight: bold;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;
      padding: 0 25px;
      display: flex;
      height: 42;
      border: 0;
    }
  }
`;
