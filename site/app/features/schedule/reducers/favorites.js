import {stateReducer} from 'truefit-react-utils';
import {TOGGLE_FAVORITE} from '../actions';
import {getItemFromStorage, setItemInStorage} from '../../shared/services';

const FAVORITES = 'FAVORITES';
const INITIAL = getItemFromStorage(FAVORITES) || [];

export default stateReducer(INITIAL, {
  [TOGGLE_FAVORITE]: (state, payload) => {
    let newState = null;

    if (state.includes(payload)) {
      newState = state.filter(s => s !== payload);
    } else {
      newState = [...state, payload];
    }

    setItemInStorage(FAVORITES, newState);

    return newState;
  },
});
