import produce from 'immer';
import {stateReducer} from '@truefit/redux-utils';

import {
  LOADING_SCHEDULE_DATA,
  LOADED_SCHEDULE_DATA,
  FAILED_LOADING_SCHEDULE_DATA,
  LOADING_SESSION_DETAIL,
  LOADED_SESSION_DETAIL,
  FAILED_LOADING_SESSION_DETAIL,
} from '../actions';

const INITIAL = {
  scheduleData: false,
  sessionDetail: false,
};

export default stateReducer(INITIAL, {
  [LOADING_SCHEDULE_DATA]: state =>
    produce(state, draft => {
      draft.scheduleData = true;
    }),
  [LOADED_SCHEDULE_DATA]: state =>
    produce(state, draft => {
      draft.scheduleData = false;
    }),
  [FAILED_LOADING_SCHEDULE_DATA]: state =>
    produce(state, draft => {
      draft.scheduleData = false;
    }),

  [LOADING_SESSION_DETAIL]: state =>
    produce(state, draft => {
      draft.sessionDetail = true;
    }),
  [LOADED_SESSION_DETAIL]: state =>
    produce(state, draft => {
      draft.sessionDetail = false;
    }),
  [FAILED_LOADING_SESSION_DETAIL]: state =>
    produce(state, draft => {
      draft.sessionDetail = false;
    }),
});
