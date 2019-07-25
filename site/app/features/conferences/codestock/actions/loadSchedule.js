import moment from 'moment';
import {get} from '@truefit/http-utils';
import {SESSIONS_URL} from '../constants';
import {
  LOADING_SCHEDULE_DATA,
  LOADED_SCHEDULE_DATA,
  FAILED_LOADING_SCHEDULE_DATA,
} from 'schedule-actions';

const DATE_FORMAT = 'YYYY-MM-DDTHH:mm:ss';

const mapToSharedModel = data => {
  const sessions = data.sessions.map(x => ({
    ...x,
    startTime: moment(x.startTime, DATE_FORMAT).toISOString(),
    endTime: moment(x.endTime, DATE_FORMAT).toISOString(),
  }));

  return {
    ...data,
    sessions,
  };
};

export const loadSchedule = async dispatch => {
  dispatch({type: LOADING_SCHEDULE_DATA});

  try {
    const response = await get(SESSIONS_URL);
    const payload = mapToSharedModel(response.data);

    dispatch({
      type: LOADED_SCHEDULE_DATA,
      payload,
    });
  } catch (err) {
    dispatch({
      type: FAILED_LOADING_SCHEDULE_DATA,
      payload: err,
    });
  }
};
