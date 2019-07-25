import {LOADED_SESSION_DETAIL} from 'schedule-actions';

export const loadSession = session => ({
  type: LOADED_SESSION_DETAIL,
  payload: {session},
});
