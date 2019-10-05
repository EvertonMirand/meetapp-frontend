import styled from 'styled-components';
import Colors from '~/theme/Colors';

export const Container = styled.div`
  background: ${Colors.headerBackground};
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 92px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 31px;
      padding-right: 31px;
    }
  }

  aside {
    display: flex;
    align-items: center;
    button {
      margin: 5px 0 0;
      font-size: 16px;
      font-weight: 600;
      width: 71px;
      height: 44px;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: ${Colors.defaultText};
      font-size: 14px;
      font-weight: bold;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 14px;
      color: ${Colors.linkDark};
    }
  }
`;
