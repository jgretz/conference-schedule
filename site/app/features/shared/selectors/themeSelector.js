import {createSelector} from 'reselect';
import flagsSelector from './flagsSelector';

export default createSelector(
  flagsSelector,
  flags => flags.theme,
);
