import { combineReducers } from 'redux';
import { userReduser } from './user/user.reducer';
import { categoriesReduser } from './categories/category.reducer';

export const rootReducer = combineReducers({
  user: userReduser,
  categories: categoriesReduser,
});
