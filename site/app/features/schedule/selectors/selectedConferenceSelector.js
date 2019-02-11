import {createSelector} from 'reselect';

import flagsSelector from './flagsSelector';
import {CONFERENCES} from '../constants/conferences';

export default createSelector(
  flagsSelector,
  ({selectedConference}) => {
    return selectedConference
      ? CONFERENCES[selectedConference]
      : CONFERENCES[0];
  },
);
