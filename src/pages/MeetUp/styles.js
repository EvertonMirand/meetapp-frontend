import styled from 'styled-components';
import Colors from '~/theme/Colors';

export const Container = styled.div`
  header {
    display: flex;
    justify-content: space-between;
    max-width: 920px;
    margin: 50px auto;
    align-content: center;
    align-items: center;

    h1 {
      font-size: 32px;
      color: ${Colors.defaultText};
    }

    div {
      display: flex;
      align-items: center;

      button {
        display: flex;
        height: 44px;
        padding: 5px 10px 5px 10px;
      }

      > button {
        margin-left: 10px;
      }
    }
  }
`;
