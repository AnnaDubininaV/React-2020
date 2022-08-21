import { combineReducers } from 'redux';
import { userReduser } from './user/user.reducer';
import { categoriesReduser } from './categories/category.reducer';
import { cartReduser } from './cart/cart.reducer';

export const rootReducer = combineReducers({
  user: userReduser,
  categories: categoriesReduser,
  cart: cartReduser,
});
