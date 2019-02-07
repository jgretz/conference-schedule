import _ from 'lodash';
import {createSelector} from 'reselect';
import sessionForCardSelector from './sessionForCardSelector';
import roomsSelector from './roomsSelector';

export default createSelector(
  roomsSelector,
  sessionForCardSelector,
  (rooms, session) => _.find(rooms, r => r.id === session.roomId),
);
