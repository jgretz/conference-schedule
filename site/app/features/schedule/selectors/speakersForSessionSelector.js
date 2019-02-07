import {createSelector} from 'reselect';
import sessionForCardSelector from './sessionForCardSelector';
import speakersSelector from './speakersSelector';

export default createSelector(
  speakersSelector,
  sessionForCardSelector,
  (speakers, session) => speakers.filter(s => session.speakers.includes(s.id)),
);
