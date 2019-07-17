export const LOAD_SESSION = 'LOAD_SESSION';

export const loadSession = session => ({
  type: LOAD_SESSION,
  payload: session,
});
