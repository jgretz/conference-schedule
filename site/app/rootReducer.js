/* eslint-disable sort-imports */
/* eslint-disable camelcase */
/* eslint-disable object-shorthand */
import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import schedule from './features/schedule/reducers';
import shared from './features/shared/reducers';

const rootReducer = history =>
  combineReducers({
    features: combineReducers({
      schedule: schedule,
      shared: shared,
    }),
    router: connectRouter(history),
  });

export default rootReducer;
