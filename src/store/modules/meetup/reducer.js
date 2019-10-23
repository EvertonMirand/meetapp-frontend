import produce from 'immer';
import {
  CREATE_MEETUP_REQUEST,
  UPDATE_MEETUP_REQUEST,
  CREATE_MEETUP_FAILURE,
  CREATE_MEETUP_SUCCESS,
  UPDATE_MEETUP_FAILURE,
  UPDATE_MEETUP_SUCCESS,
} from './types';

const INITIAL_STATE = {
  loading: false,
};

export default function meetups(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case CREATE_MEETUP_REQUEST:
      case UPDATE_MEETUP_REQUEST: {
        draft.loading = true;
        break;
      }
      case CREATE_MEETUP_FAILURE:
      case CREATE_MEETUP_SUCCESS:
      case UPDATE_MEETUP_FAILURE:
      case UPDATE_MEETUP_SUCCESS: {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
