import {
  CREATE_MEETUP_REQUEST,
  UPDATE_MEETUP_REQUEST,
  CREATE_MEETUP_SUCCESS,
  UPDATE_MEETUP_FAILURE,
  UPDATE_MEETUP_SUCCESS,
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

export function updateMeetupRequest(meetup) {
  return {
    type: UPDATE_MEETUP_REQUEST,
    payload: { meetup },
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
