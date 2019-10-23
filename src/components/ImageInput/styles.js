import styled from 'styled-components';

export const Container = styled.div`
  &:hover {
    opacity: 0.7;
  }

  label {
    cursor: pointer;
    display: flex;
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 4px;
    border: none;
    background: rgba(0, 0, 0, 0.3);
    margin-bottom: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #999;
    font-size: 20px;
    font-weight: bold;

    img {
      width: 100%;
      height: 100%;
    }

    svg {
      margin-bottom: 10px;
      width: 60px;
      height: 60px;
    }

    input {
      display: none;
    }
  }
`;
