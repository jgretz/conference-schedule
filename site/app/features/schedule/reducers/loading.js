import produce from 'immer';
import {stateReducer} from 'truefit-react-utils';

import {
  LOADING_SCHEDULE_DATA,
  LOADED_SCHEDULE_DATA,
  FAILED_LOADING_SCHEDULE_DATA,
} from '../constants/actions';

const INITIAL = {
  scheduleData: false,
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
});
