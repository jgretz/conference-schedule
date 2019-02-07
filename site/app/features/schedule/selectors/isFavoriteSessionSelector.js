import _ from 'lodash';
import {createSelector} from 'reselect';
import sessionForCardSelector from './sessionForCardSelector';
import favoritesSelector from './favoritesSelector';

export default createSelector(
  favoritesSelector,
  sessionForCardSelector,
  (favorites, session) => _.some(favorites, f => f === session.id),
);
