import { compose, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
// by default this will use local storage
import storage from 'redux-persist/lib/storage';
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import { rootSaga } from './root-saga';

import logger from 'redux-logger';
import { rootReducer } from './root-reducer';

const persistConfig = {
  key: 'root',
  storage,
  //   blacklist: ['user'],
  whiteList: ['cart'],
};

const sagaMiddleware = createSagaMiddleware();

const persistedReduser = persistReducer(persistConfig, rootReducer);

const middlewares = [
  process.env.NODE_ENV !== 'production' && logger,
  //   thunk,
  sagaMiddleware,
].filter(Boolean);

const composeEnhanser =
  (process.env.NODE_ENV !== 'production' &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composeEnhansers = composeEnhanser(applyMiddleware(...middlewares));

// export const store = createStore(rootReducer, undefined, composeEnhansers);
export const store = createStore(persistedReduser, undefined, composeEnhansers);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
