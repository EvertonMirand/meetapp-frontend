import produce from 'immer';
import { SIGN_IN_SUCCESS, SIGN_OUT } from '../auth/type';
import { UPDATE_PROFILE_SUCCESS } from './type';

const INITIAL_STATE = {
  profile: null,
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    const { payload } = action;
    switch (action.type) {
      case SIGN_IN_SUCCESS: {
        draft.profile = payload.user;
        break;
      }
      case UPDATE_PROFILE_SUCCESS: {
        draft.profile = payload.profile;
        break;
      }
      case SIGN_OUT: {
        draft.profile = null;
        break;
      }
      default:
    }
  });
}
