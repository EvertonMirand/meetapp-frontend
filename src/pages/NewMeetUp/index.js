import React from 'react';

import { useDispatch } from 'react-redux';
import MeetupForm from '~/components/MeetupForm';
import { createMeetupRequest } from '~/store/modules/meetup/actions';

export default function NewMeetUp() {
  const dispatch = useDispatch();

  const handleSubmit = data => {
    dispatch(createMeetupRequest(data));
  };

  return <MeetupForm onSubmit={handleSubmit} />;
}
