import {TOGGLE_FAVORITE} from '../constants/actions';

export const toggleFavorite = (conference, session) => ({
  type: TOGGLE_FAVORITE,
  payload: {
    conference,
    session,
  },
});
