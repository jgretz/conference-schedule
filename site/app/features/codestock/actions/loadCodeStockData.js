import moment from 'moment';
import {get} from 'truefit-react-utils';
import {DATA_URL} from '../constants';
import {
  LOADING_SCHEDULE_DATA,
  LOADED_SCHEDULE_DATA,
  FAILED_LOADING_SCHEDULE_DATA,
} from '../../schedule/constants/actions';

const DATE_FORMAT = 'MM-DD-YYYY HH:mm a SSS';

const mapToSharedModel = data => {
  const sessions = data.sessions.map(x => ({
    ...x,
    startTime: moment(x.startTime, DATE_FORMAT).toString(),
    endTime: moment(x.endTime, DATE_FORMAT).toString(),
  }));

  return {
    ...data,
    sessions,
  };
};

export const loadCodeStockData = async dispatch => {
  dispatch({type: LOADING_SCHEDULE_DATA});

  try {
    const response = await get(DATA_URL);
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
