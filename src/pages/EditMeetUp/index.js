import React, { useMemo } from 'react';

import PropTypes from 'prop-types';
import { parseISO } from 'date-fns';
import { useDispatch } from 'react-redux';

import MeetupForm from '~/components/MeetupForm';
import { updateMeetupRequest } from '~/store/modules/meetup/actions';

export default function EditMeetUp({ location }) {
  const dispatch = useDispatch();

  const meetup = useMemo(
    () => ({
      ...location.state.meetup,
      date: parseISO(location.state.meetup.date),
    }),
    [location.state.meetup]
  );

  const handleSubmit = data => {
    dispatch(updateMeetupRequest(meetup.id, data));
  };

  return <MeetupForm meetup={meetup} onSubmit={handleSubmit} />;
}

EditMeetUp.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      meetup: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        description: PropTypes.string,
        dateFormatted: PropTypes.string,
        location: PropTypes.string,
        file_id: PropTypes.number,
        File: PropTypes.shape({
          url: PropTypes.string,
        }),
        date: PropTypes.string,
      }),
    }),
  }),
};

EditMeetUp.defaultProps = {
  location: {
    state: {
      meetup: {},
    },
  },
};
