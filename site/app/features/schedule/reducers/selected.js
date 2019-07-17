import produce from 'immer';
import {stateReducer} from '@truefit/redux-utils';
import {setItemInStorage} from '../../shared/services';

import {
  INITIALIZE,
  CONFERENCE_SELECTED,
  DAY_SELECTED,
  SESSION_SELECTED,
  CONFERENCE,
} from '../constants/actions';

const INITIAL = {
  conference: null,
  day: null,
  sessionId: null,
};

export default stateReducer(INITIAL, {
  [INITIALIZE]: (state, payload) =>
    produce(state, draft => {
      draft.conference = payload.defaultConference;
      draft.day = payload.defaultDay;
    }),

  [CONFERENCE_SELECTED]: (state, payload) => {
    setItemInStorage(CONFERENCE, payload.title);

    return produce(state, draft => {
      draft.conference = payload;
    });
  },

  [DAY_SELECTED]: (state, payload) =>
    produce(state, draft => {
      draft.day = payload;
    }),

  [SESSION_SELECTED]: (state, payload) =>
    produce(state, draft => {
      draft.sessionId = payload?.id;
    }),
});
