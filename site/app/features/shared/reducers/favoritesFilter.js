import {stateReducer} from 'truefit-react-utils';
import {TOGGLE_FAVORITES_FILTER} from '../actions';

const INITIAL = {
  filterToFavorites: false,
};

export default stateReducer(INITIAL, {
  [TOGGLE_FAVORITES_FILTER]: state => ({
    filterToFavorites: !state.filterToFavorites,
  }),
});
