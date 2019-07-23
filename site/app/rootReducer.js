/* eslint-disable sort-imports */
/* eslint-disable camelcase */
/* eslint-disable object-shorthand */
import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import shared from './features/shared/reducers';
import schedule from './features/schedule/reducers';

const rootReducer = history =>
  combineReducers({
    features: combineReducers({
      shared: shared,
      schedule: schedule,
    }),
    router: connectRouter(history),
  });

export default rootReducer;
