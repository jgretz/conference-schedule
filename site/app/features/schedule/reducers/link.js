import {stateReducer} from '@truefit/redux-utils';

import {GENERATED_FAVORITES_LINK, CLEAR_FAVORITES_LINK} from '../actions';

const INITIAL = '';

export default stateReducer(INITIAL, {
  [GENERATED_FAVORITES_LINK]: (state, payload) => payload,
  [CLEAR_FAVORITES_LINK]: () => INITIAL,
});
