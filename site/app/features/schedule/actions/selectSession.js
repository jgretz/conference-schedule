import {SESSION_SELECTED} from '../constants/actions';

export const selectSession = session => ({
  type: SESSION_SELECTED,
  payload: session,
});
