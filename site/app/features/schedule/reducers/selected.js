import produce from 'immer';
import {stateReducer} from 'truefit-react-utils';

import {
  CONFERENCE_SELECTED,
  DAY_SELECTED,
  SESSION_SELECTED,
} from '../constants/actions';
import {getDefaultConference, getDefaultDayForConference} from '../services';

const defaultConference = getDefaultConference();
const defaultDay = getDefaultDayForConference(defaultConference);

const INITIAL = {
  conference: defaultConference,
  day: defaultDay,
  sessionId: null,
};

export default stateReducer(INITIAL, {
  [CONFERENCE_SELECTED]: (state, payload) =>
    produce(state, draft => {
      draft.conference = payload;
    }),

  [DAY_SELECTED]: (state, payload) =>
    produce(state, draft => {
      draft.day = payload;
    }),

  [SESSION_SELECTED]: (state, payload) =>
    produce(state, draft => {
      draft.sessionId = payload?.id;
    }),
});
