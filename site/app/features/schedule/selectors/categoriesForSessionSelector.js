import {createSelector} from 'reselect';
import sessionForCardSelector from './sessionForCardSelector';
import categoriesSelector from './categoriesSelector';

export default createSelector(
  categoriesSelector,
  sessionForCardSelector,
  (categories, session) =>
    categories.filter(c => session.categoryItems.includes(c.id)),
);
