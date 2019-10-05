import styled from 'styled-components';

export const Container = styled.div`
  label {
    cursor: pointer;
  }

  &:hover {
    opacity: 0.7;
  }

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 4px;
    border: none;
    background: rgba(0, 0, 0, 0.4);
    margin-bottom: 20px;
  }

  input {
    display: none;
  }
`;
