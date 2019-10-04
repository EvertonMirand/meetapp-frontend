import React from 'react';
import { MdAddCircleOutline } from 'react-icons/md';
import PropTypes from 'prop-types';
import Button from '../Button';

// import { Container } from './styles';

export default function AddButton({ children, onClick }) {
  return (
    <Button onClick={onClick}>
      <MdAddCircleOutline size={24} color="#fff" />
      {children}
    </Button>
  );
}

AddButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  onClick: PropTypes.func,
};

AddButton.defaultProps = {
  onClick: () => {},
};
