import _ from 'lodash';
import {createSelector} from 'reselect';
import sessionForDetailSelector from './sessionForDetailSelector';
import roomsSelector from './roomsSelector';

export default createSelector(
  roomsSelector,
  sessionForDetailSelector,
  (rooms, session) => _.find(rooms, r => r.id === session.roomId),
);
