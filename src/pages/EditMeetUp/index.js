import React, { useMemo } from 'react';

import PropTypes from 'prop-types';
import { parseISO } from 'date-fns';

import MeetupForm from '~/components/MeetupForm';

export default function EditMeetUp({ location }) {
  const meetup = useMemo(
    () => ({
      ...location.state.meetup,
      date: parseISO(location.state.meetup.date),
    }),
    [location.state.meetup]
  );

  return <MeetupForm meetup={meetup} onSubmit={() => {}} />;
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
