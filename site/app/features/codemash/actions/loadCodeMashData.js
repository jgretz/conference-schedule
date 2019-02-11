import {get} from 'truefit-react-utils';
import {CODEMASH_DATA_URL} from '../constants';
import {
  LOADING_SCHEDULE_DATA,
  LOADED_SCHEDULE_DATA,
  FAILED_LOADING_SCHEDULE_DATA,
} from '../../schedule/constants/actions';

const loadData = async dispatch => {
  dispatch({type: LOADING_SCHEDULE_DATA});

  try {
    const response = await get(CODEMASH_DATA_URL);

    dispatch({
      type: LOADED_SCHEDULE_DATA,
      payload: response.data,
    });
  } catch (err) {
    dispatch({
      type: FAILED_LOADING_SCHEDULE_DATA,
      payload: err,
    });
  }
};

export const loadCodeMashData = () => dispatch => loadData(dispatch);
