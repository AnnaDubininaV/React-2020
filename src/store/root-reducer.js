import { combineReducers } from 'redux';
import { userReduser } from './user/user.reducer';

export const rootReducer = combineReducers({
  user: userReduser,
});
