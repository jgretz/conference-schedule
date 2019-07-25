import {DAY_SELECTED} from './actions';

export const selectDay = day => ({
  type: DAY_SELECTED,
  payload: day,
});
