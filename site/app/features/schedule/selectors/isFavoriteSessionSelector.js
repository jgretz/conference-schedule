import {createSelector} from 'reselect';

import selectedConferenceSelector from './selectedConferenceSelector';
import sessionForDetailSelector from './sessionForDetailSelector';
import favoritesSelector from './favoritesSelector';

export default createSelector(
  selectedConferenceSelector,
  favoritesSelector,
  sessionForDetailSelector,

  (conference, favorites, session) => {
    const confArray = favorites[conference.title];
    if (!confArray) {
      return false;
    }

    return confArray.includes(session.id);
  },
);
