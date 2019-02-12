import {TOGGLE_FAVORITE} from '../constants/actions';

export const toggleFavorite = id => ({
  type: TOGGLE_FAVORITE,
  payload: id,
});
