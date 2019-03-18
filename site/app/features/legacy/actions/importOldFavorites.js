import _ from 'lodash';
import {getItemFromStorage} from '../../shared/services';
import {toggleFavorite} from '../../schedule/actions';
import {
  selectedConferenceSelector,
  sessionsSelector,
} from '../../schedule/selectors';

const OLD_FAVORITES = 'FAVORITES';

export const importOldFavorites = () => (dispatch, getState) => {
  const favorites = getItemFromStorage(OLD_FAVORITES);
  if (!favorites || favorites.length === 0) {
    return;
  }

  const state = getState();
  const conference = selectedConferenceSelector(state);
  const sessions = sessionsSelector(state);

  favorites.forEach(x => {
    const session = _.find(sessions, s => s.id === x);
    if (!session) {
      return;
    }

    dispatch(toggleFavorite(conference, session));
  });

  localStorage.removeItem(OLD_FAVORITES);
};
