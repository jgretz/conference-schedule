import {createSelector} from 'reselect';
import sessionForCardSelector from './sessionForCardSelector';
import tagsSelector from './tagsSelector';

export default createSelector(
  tagsSelector,
  sessionForCardSelector,
  (tags, session) => tags.filter(c => session.tags.includes(c.id)),
);
