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
        justify-content: space-between;
        padding: 0 20px;
        font-weight: bold;
        font-size: 16px;
        svg {
          margin-right: 10px;
        }
      }

      > button {
        margin-left: 10px;
      }
    }
  }
`;

export const Detail = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 920px;
  margin: 50px auto;
  flex-direction: column;
  white-space: pre-wrap;

  img {
    height: 300px;
    object-fit: cover;
    margin-bottom: 5px;
    border-radius: 4px;
  }

  span {
    font-size: 18px;
    color: ${Colors.defaultText};
    line-height: 32px;
    display: flex;
    text-align: justify;
  }

  footer {
    color: ${Colors.opacityIcon};
    margin-top: 10px;
    display: flex;
    align-items: center;

    time {
      margin-left: 6px;
      margin-right: 20px;
    }

    address {
      margin-left: 5px;
    }
  }
`;
