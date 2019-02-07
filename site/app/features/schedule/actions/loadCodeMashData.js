import {get} from 'truefit-react-utils';
import {CODEMASH_DATA_URL} from '../../shared/constants';

export const LOADING_CODEMASH_DATA = 'LOADING_CODEMASH_DATA';
export const LOADED_CODEMASH_DATA = 'LOADED_CODEMASH_DATA';
export const FAILED_CODEMASH_DATA = 'FAILED_CODEMASH_DATA';

const loadData = async dispatch => {
  dispatch({type: LOADING_CODEMASH_DATA});

  // try {
  const response = await get(CODEMASH_DATA_URL);

  dispatch({
    type: LOADED_CODEMASH_DATA,
    payload: response.data,
  });
  // } catch (err) {
  //   dispatch({
  //     type: FAILED_CODEMASH_DATA,
  //     payload: err,
  //   });
  // }
};

export const loadCodeMashData = () => dispatch => loadData(dispatch);
