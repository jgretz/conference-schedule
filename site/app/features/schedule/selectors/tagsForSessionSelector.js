import {createSelector} from 'reselect';
import sessionForDetailSelector from './sessionForDetailSelector';
import tagsSelector from './tagsSelector';

export default createSelector(
  tagsSelector,
  sessionForDetailSelector,
  (tags, session) => tags.filter(c => session.tags.includes(c.id)),
);
