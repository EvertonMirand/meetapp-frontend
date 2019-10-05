import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { MdPlace, MdEvent } from 'react-icons/md';
import { Container, Detail } from './styles';
import IconLabelButton from '~/components/IconLabelButton';
import Colors from '~/theme/Colors';

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

  return (
    <Container>
      {renderHeader()}
      <Detail>
        <img src={meetup.File.url} alt="Banner" />
        <span>{meetup.description}</span>
        <footer>
          <MdEvent size={20} color={Colors.opacityIcon} />
          <time>{meetup.dateFormatted}</time>

          <MdPlace size={20} color={Colors.opacityIcon} />
          <address>{meetup.location}</address>
        </footer>
      </Detail>
    </Container>
  );
}

MeetUp.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      meetup: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        description: PropTypes.string,
        dateFormatted: PropTypes.string,
        location: PropTypes.string,
        File: PropTypes.shape({
          url: PropTypes.string,
        }),
      }),
    }),
  }).isRequired,
};
