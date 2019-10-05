import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Container } from './styles';
import IconLabelButton from '~/components/IconLabelButton';

export default function MeetUp({ location }) {
  const { meetup } = location.state;

  const renderHeader = () => (
    <header>
      <h1>{meetup.title}</h1>{' '}
      <div>
        <Link
          to={{
            pathname: `/edit/${meetup.id}`,
            state: { meetup },
          }}
        >
          <IconLabelButton iconType="edit">Editar</IconLabelButton>
        </Link>
        <IconLabelButton iconType="remove">Cancelar</IconLabelButton>
      </div>
    </header>
  );

  return <Container>{renderHeader()}</Container>;
}

MeetUp.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      meetup: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
      }),
    }),
  }).isRequired,
};
