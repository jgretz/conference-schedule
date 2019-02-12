import produce from 'immer';
import {stateReducer} from 'truefit-react-utils';

import {SPEAKERS_SELECTED} from '../constants/actions';

const INITIAL = {
  speakerModal: false,
};

export default stateReducer(INITIAL, {
  [SPEAKERS_SELECTED]: (state, payload) =>
    produce(state, draft => {
      draft.speakerModal = payload && payload.length > 0;
    }),
});
