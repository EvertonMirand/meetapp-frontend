import {
  CREATE_MEETUP_REQUEST,
  UPDATE_MEETUP_REQUEST,
  CREATE_MEETUP_SUCCESS,
  UPDATE_MEETUP_FAILURE,
  UPDATE_MEETUP_SUCCESS,
  CANCEL_MEETUP_REQUEST,
  CANCEL_MEETUP_FAILURE,
  CANCEL_MEETUP_SUCCESS,
} from './types';

export function createMeetupRequest(meetup) {
  return {
    type: CREATE_MEETUP_REQUEST,
    payload: {
      meetup,
    },
  };
}

export function createMeetupSuccess() {
  return {
    type: CREATE_MEETUP_SUCCESS,
  };
}

export function createMeetupFailure() {
  return {
    type: CREATE_MEETUP_SUCCESS,
  };
}

export function updateMeetupRequest(id, meetup) {
  return {
    type: UPDATE_MEETUP_REQUEST,
    payload: {
      id,
      meetup,
    },
  };
}

export function updateMeetupFailure() {
  return {
    type: UPDATE_MEETUP_FAILURE,
  };
}

export function updateMeetupSuccess() {
  return {
    type: UPDATE_MEETUP_SUCCESS,
  };
}

export function cancelMeetupRequest(id, meetup) {
  return {
    type: CANCEL_MEETUP_REQUEST,
    payload: {
      id,
      meetup,
    },
  };
}

export function cancelMeetupFailure() {
  return {
    type: CANCEL_MEETUP_FAILURE,
  };
}

export function cancelMeetupSuccess() {
  return {
    type: CANCEL_MEETUP_SUCCESS,
  };
}
