import {createSelector} from 'reselect';
import sessionForCardSelector from './sessionForCardSelector';
import selectedSessionSelector from './selectedSessionSelector';

const PLACEHOLDER = {
  speakers: [],
  tags: [],
};

export default createSelector(
  sessionForCardSelector,
  selectedSessionSelector,
  (cardSession, selectedSession) =>
    cardSession || selectedSession || PLACEHOLDER,
);
