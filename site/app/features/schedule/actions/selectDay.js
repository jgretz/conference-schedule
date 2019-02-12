import {DAY_SELECTED} from '../constants/actions';

export const selectDay = day => ({
  type: DAY_SELECTED,
  payload: day,
});
