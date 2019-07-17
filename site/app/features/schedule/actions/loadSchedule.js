export const LOAD_SCHEDULE = 'LOAD_SCHEDULE';

export const loadSchedule = conference => ({
  type: LOAD_SCHEDULE,
  payload: conference,
});
