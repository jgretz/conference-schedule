import {TOGGLE_FAVORITE} from './actions';

export const toggleFavorite = (conference, session) => ({
  type: TOGGLE_FAVORITE,
  payload: {
    conference,
    session,
  },
});
