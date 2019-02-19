import produce from 'immer';
import {stateReducer} from 'truefit-react-utils';
import {TOGGLE_FAVORITE} from '../constants/actions';
import {getItemFromStorage, setItemInStorage} from '../../shared/services';

const FAVORITES = 'FAVORITES';
const INITIAL = getItemFromStorage(FAVORITES) || [];

export default stateReducer(INITIAL, {
  [TOGGLE_FAVORITE]: (state, payload) => {
    const newState = produce(state, draft => {
      if (state.includes(payload)) {
        draft.splice(draft.indexOf(payload), 1);
      } else {
        draft.push(payload);
      }
    });

    setItemInStorage(FAVORITES, newState);

    return newState;
  },
});
