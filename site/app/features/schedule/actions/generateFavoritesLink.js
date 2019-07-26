import {post} from '@truefit/http-utils';
import {favoritesSelector} from '../../schedule/selectors';

export const GENERATED_FAVORITES_LINK = 'GENERATED_FAVORITES_LINK';

export const generateFavoritesLink = () => async (dispatch, getState) => {
  const favorites = favoritesSelector(getState());

  const result = await post('/transfer/link', {favorites});

  dispatch({
    type: GENERATED_FAVORITES_LINK,
    payload: result.data.link,
  });
};
