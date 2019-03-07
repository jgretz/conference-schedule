import {createSelector} from 'reselect';
import locationSelector from './locationSelector';
import {ROUTES} from '../constants';

export default createSelector(
  locationSelector,
  location => location?.pathname === ROUTES.schedule.route,
);
