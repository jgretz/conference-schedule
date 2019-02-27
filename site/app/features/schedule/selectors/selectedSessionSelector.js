import _ from 'lodash';
import {createSelector} from 'reselect';
import selectedSelector from './selectedSelector';
import sessionsSelector from './sessionsSelector';

export default createSelector(
  selectedSelector,
  sessionsSelector,
  ({sessionId}, sessions) => _.find(sessions, s => s.id === sessionId),
);
