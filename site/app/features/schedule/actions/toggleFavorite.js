export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';

export const toggleFavorite = id => ({
  type: TOGGLE_FAVORITE,
  payload: id,
});
