import produce from 'immer';
import {stateReducer} from 'truefit-react-utils';

import {
  SESSION_SELECTED,
  SESSION_DETAIL_SELECTED,
  SESSION_SPEAKERS_SELECTED,
} from '../constants/actions';

const INITIAL = {
  sessionModalVisible: false,
  sessionModalMode: SESSION_DETAIL_SELECTED,
};

export default stateReducer(INITIAL, {
  [SESSION_SELECTED]: (state, payload) =>
    produce(state, draft => {
      draft.sessionModalVisible = payload != null;
    }),

  [SESSION_DETAIL_SELECTED]: state =>
    produce(state, draft => {
      draft.sessionModalMode = SESSION_DETAIL_SELECTED;
    }),

  [SESSION_SPEAKERS_SELECTED]: state =>
    produce(state, draft => {
      draft.sessionModalMode = SESSION_SPEAKERS_SELECTED;
    }),
});
