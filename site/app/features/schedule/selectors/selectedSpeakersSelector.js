import {createSelector} from 'reselect';
import selectedSelector from './selectedSelector';

export default createSelector(
  selectedSelector,
  ({speakers}) => speakers,
);
