import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { MdPlace, MdEvent } from 'react-icons/md';
import { Container, Detail } from './styles';
import IconLabelButton from '~/components/IconLabelButton';
import Colors from '~/theme/Colors';
import { cancelMeetupRequest } from '~/store/modules/meetup/actions';

export default function MeetUp({ location }) {
  const { meetup } = location.state;
  const { past } = meetup;
  const dispatch = useDispatch();

  const onHandleCancel = () => {
    dispatch(cancelMeetupRequest(meetup.id));
  };

  const renderHeader = () => (
    <header>
      <h1>{meetup.title}</h1>{' '}
      {!past && (
        <div>
          <Link
            to={{
              pathname: `/edit/${meetup.id}`,
              state: { meetup },
            }}
          >
            <IconLabelButton iconType="edit">Editar</IconLabelButton>
          </Link>
          <IconLabelButton iconType="remove" onClick={onHandleCancel}>
            Cancelar
          </IconLabelButton>
        </div>
      )}
    </header>
  );

  const renderDetail = () => (
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
  );

  return (
    <Container>
      {renderHeader()}
      {renderDetail()}
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
        past: PropTypes.bool,
      }),
    }),
  }).isRequired,
};
