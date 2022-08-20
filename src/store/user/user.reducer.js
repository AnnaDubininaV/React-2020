import { USER_ACTION_TYPES } from './user.types';

import(USER_ACTION_TYPES);

const INITIAL_STATE = {
  curentUser: null,
};

export const userReduser = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return { ...state, curentUser: payload };
    default:
      return state;
  }
};
