import _ from 'lodash';
import moment from 'moment';
import {createSelector} from 'reselect';
import selectedDaySelector from './selectedDaySelector';
import sessionsSelector from './sessionsSelector';
import favoritesSelector from './favoritesSelector';
import {favoritesFilterSelector} from '../../shared/selectors';

export default createSelector(
  selectedDaySelector,
  sessionsSelector,
  favoritesSelector,
  favoritesFilterSelector,
  (day, allSessions, favorites, favoritesFilter) => {
    const sessions = (allSessions || []).filter(s => {
      if (!moment(s.startsAt).isSame(day, 'day')) {
        return false;
      }

      return !favoritesFilter || favorites.includes(s.id);
    });

    return _.sortBy(sessions, s => moment(s.startsAt));
  },
);
