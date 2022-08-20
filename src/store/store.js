import { compose, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { rootReducer } from './root-reducer';

// root reducer

// const loggerMiddleware = (store) => (next) => (action) => {
//   if (!action) {
//     return next();
//   }

//   console.log('type', action.type);
//   console.log('payload', action.payload);
//   console.log('currentState', store.getState());

//   next(action);
//   console.log('next state', store.getState());
// };

const middlewares = [logger];
const composeEnhansers = compose(applyMiddleware(...middlewares));

export const store = createStore(rootReducer, undefined, composeEnhansers);
