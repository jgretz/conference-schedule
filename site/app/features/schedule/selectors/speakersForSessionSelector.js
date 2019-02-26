import {createSelector} from 'reselect';
import sessionForDetailSelector from './sessionForDetailSelector';
import speakersSelector from './speakersSelector';

export default createSelector(
  speakersSelector,
  sessionForDetailSelector,
  (speakers, session) => speakers.filter(s => session.speakers.includes(s.id)),
);
