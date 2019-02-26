import _ from 'lodash';
import {get} from 'truefit-react-utils';
import {CODEMASH_DATA_URL} from '../constants';
import {
  LOADING_SCHEDULE_DATA,
  LOADED_SCHEDULE_DATA,
  FAILED_LOADING_SCHEDULE_DATA,
} from '../../schedule/constants/actions';

const mapToSharedModel = data => {
  const tags = _.flatMap(data.categories, x => x.items);
  const sessions = data.sessions.map(x => ({
    ...x,
    startTime: x.startsAt,
    endTime: x.endsAt,
    tags: x.categoryItems,
  }));

  const speakers = data.speakers.map(x => ({
    ...x,
    name: x.fullName,
  }));

  return {
    sessions,
    speakers,
    tags,

    rooms: data.rooms,
  };
};

export const loadData = async dispatch => {
  dispatch({type: LOADING_SCHEDULE_DATA});

  try {
    const response = await get(CODEMASH_DATA_URL);
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
