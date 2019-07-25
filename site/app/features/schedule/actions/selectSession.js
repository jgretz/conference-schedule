import {SESSION_SELECTED} from './actions';

export const selectSession = session => ({
  type: SESSION_SELECTED,
  payload: session,
});
