import _ from 'lodash';
import {get} from '@truefit/http-utils';
import {CODEMASH_DATA_URL} from '../constants';
import {
  LOADING_SCHEDULE_DATA,
  LOADED_SCHEDULE_DATA,
  FAILED_LOADING_SCHEDULE_DATA,
} from 'schedule-actions';

const mapToSharedModel = data => {
  const sessions = data.sessions.map(x => ({
    ...x,

    startTime: x.startsAt,
    endTime: x.endsAt,

    tags: _.flatMap(x.categories, c => c.categoryItems.map(x => x.id)),
    speakers: x.speakers.map(s => s.id),
  }));

  const tags = _.uniqBy(
    _.flattenDeep(
      data.sessions.map(x => x.categories.map(x => x.categoryItems)),
    ),
    x => x.id,
  );

  const speakers = _.uniqBy(
    _.flatMap(data.sessions, x => x.speakers),
    x => x.id,
  );

  const rooms = _.uniqBy(
    data.sessions.map(x => ({id: x.roomId, name: x.room})),
    x => x.id,
  );

  return {
    sessions,
    speakers,
    tags,
    rooms,
  };
};

export const loadSchedule = async dispatch => {
  dispatch({type: LOADING_SCHEDULE_DATA});

  try {
    const response = await get(CODEMASH_DATA_URL);
    const payload = mapToSharedModel(response.data[0]);

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
