import produce from 'immer';
import {stateReducer} from '@truefit/redux-utils';
import {TOGGLE_FAVORITES_FILTER, TOGGLE_THEME} from '../actions';
import {getItemFromStorage, setItemInStorage} from '../services';
import {THEMES} from '../constants';

const FLAGS = 'FLAGS';

const fromStorage = getItemFromStorage(FLAGS);
const INITIAL = {
  filterToFavorites: fromStorage?.filterToFavorites || false,
  theme: fromStorage?.theme || THEMES.LIGHT,
};

export default stateReducer(INITIAL, {
  [TOGGLE_FAVORITES_FILTER]: state => {
    const result = produce(state, draft => {
      draft.filterToFavorites = !state.filterToFavorites;
    });

    setItemInStorage(FLAGS, result);

    return result;
  },

  [TOGGLE_THEME]: state => {
    const result = produce(state, draft => {
      draft.theme = state.theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
    });

    setItemInStorage(FLAGS, result);

    return result;
  },
});
