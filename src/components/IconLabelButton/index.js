import React from 'react';
import { MdAddCircleOutline, MdEdit, MdDeleteForever } from 'react-icons/md';
import PropTypes from 'prop-types';
import Button from '../Button';
import Colors from '~/theme/Colors';
import { Spinner } from './styles';

// import { Container } from './styles';

export default function IconLabelButton({
  children,
  onClick,
  iconType,
  buttonType,
  disabled,
  loading,
}) {
  const iconAndColorBytype = () => {
    switch (iconType) {
      case 'edit':
        return [MdEdit, Colors.editButton];

      case 'remove':
        return [MdDeleteForever, Colors.buttonBackground];
      default:
        return [MdAddCircleOutline, Colors.buttonBackground];
    }
  };

  const [Icon, color] = iconAndColorBytype();

  return (
    <Button
      onClick={onClick}
      color={color}
      type={buttonType}
      disabled={disabled}
    >
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Icon size={24} color={Colors.defaultIcon} />
          {children}
        </>
      )}
    </Button>
  );
}

IconLabelButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,

  onClick: PropTypes.func,
  iconType: PropTypes.oneOf(['add', 'edit', 'remove']),
  buttonType: PropTypes.string,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
};

IconLabelButton.defaultProps = {
  onClick: () => {},
  iconType: 'add',
  buttonType: 'button',
  disabled: false,
  loading: false,
};
