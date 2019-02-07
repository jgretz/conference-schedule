import promiseMiddlware from 'redux-promise-middleware';
import thunkMiddleware from 'redux-thunk';
import asyncAwaitMiddleware from 'redux-async-await';
import {applyMiddleware, createStore} from 'redux';
import {connectRouter, routerMiddleware} from 'connected-react-router';
import createRootReducer from '../rootReducer';

const PRODUCTION = process.env.NODE_ENV === 'production';

const createProductionStore = (history, middleware) =>
  createStore(
    connectRouter(history)(createRootReducer(history)),
    applyMiddleware(...middleware),
  );

const createDevStore = (history, middleware) => {
  const composeWithDevTools = require('redux-devtools-extension')
    .composeWithDevTools;

  const store = createStore(
    connectRouter(history)(createRootReducer(history)),
    composeWithDevTools(applyMiddleware(...middleware)),
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../rootReducer', () => {
      const nextReducer = require('../rootReducer').default;
      store.replaceReducer(nextReducer);
    });
  }

  return store;
};

export const configureStore = history => {
  const middleware = [
    thunkMiddleware,
    promiseMiddlware,
    asyncAwaitMiddleware,
    routerMiddleware(history),
  ];

  return PRODUCTION
    ? createProductionStore(history, middleware)
    : createDevStore(history, middleware);
};
