import _ from 'lodash';
import {createSelector} from 'reselect';
import sessionForDetailSelector from './sessionForDetailSelector';
import favoritesSelector from './favoritesSelector';

export default createSelector(
  favoritesSelector,
  sessionForDetailSelector,
  (favorites, session) => _.some(favorites, f => f === session.id),
);
