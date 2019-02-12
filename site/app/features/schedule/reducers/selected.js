import produce from 'immer';
import {stateReducer} from 'truefit-react-utils';

import {DAY_SELECTED, SPEAKERS_SELECTED} from '../constants/actions';
import {getDefaultConference, getDefaultDayForConference} from '../services';

const defaultConference = getDefaultConference();
const defaultDay = getDefaultDayForConference(defaultConference);

const INITIAL = {
  conference: defaultConference,
  day: defaultDay,
  speakers: null,
};

export default stateReducer(INITIAL, {
  [DAY_SELECTED]: (state, payload) =>
    produce(state, draft => {
      draft.day = payload;
    }),

  [SPEAKERS_SELECTED]: (state, payload) =>
    produce(state, draft => {
      draft.speakers = payload;
    }),
});
