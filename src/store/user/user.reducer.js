import { USER_ACTION_TYPES } from './user.types';

import(USER_ACTION_TYPES);

const INITIAL_STATE = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userReduser = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
      return { ...state, currentUser: payload };
    case USER_ACTION_TYPES.SIGN_IN_FAILED:
      return { ...state, error: payload };
    default:
      return state;
  }
};
