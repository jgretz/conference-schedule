import _ from 'lodash';
import moment from 'moment';

import {get} from '@truefit/http-utils';
import {SESSIONS_URL} from '../constants';
import {
  LOADING_SCHEDULE_DATA,
  LOADED_SCHEDULE_DATA,
  FAILED_LOADING_SCHEDULE_DATA,
} from 'schedule-actions';

const SL_DATE_FORMAT = 'YYYY-MM-DD hh:mm a';

const mapToSharedModel = data => {
  const sessions = data.map(s => {
    const startTime = moment(s.startTime, SL_DATE_FORMAT);
    const endTime = moment(s.endTime, SL_DATE_FORMAT);

    return {
      ...s,
      id: s.title,
      startTime: startTime.toISOString(),
      endTime: endTime.toISOString(),
      tags: [],
    };
  });

  const speakers = (data.map(s => s.speakers) |> _.flatten |> _.uniq).map(
    s => ({id: s, name: s}),
  );

  const rooms = (data.map(s => s.roomId) |> _.uniq).map(r => ({
    id: r,
    name: r,
  }));

  return {
    sessions,
    speakers,
    tags: [],
    rooms,
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
    console.error(err);
    dispatch({
      type: FAILED_LOADING_SCHEDULE_DATA,
      payload: err,
    });
  }
};
