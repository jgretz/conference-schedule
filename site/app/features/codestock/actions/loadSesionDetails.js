import _ from 'lodash';
import {get} from 'truefit-react-utils';

import {
  LOADING_SESSION_DETAIL,
  LOADED_SESSION_DETAIL,
  FAILED_LOADING_SESSION_DETAIL,
} from '../../schedule/constants/actions';

import {SESSION_URL, SPEAKER_URL} from '../constants';

export const loadSessionDetail = async (dispatch, store, [session]) => {
  dispatch({type: LOADING_SESSION_DETAIL});

  try {
    const sessionPromise = get(`${SESSION_URL}?id=${session.id}`);
    const speakerPromises = session.speakers.map(s =>
      get(`${SPEAKER_URL}?id=${s}`),
    );

    const results = await Promise.all([sessionPromise, ...speakerPromises]);

    dispatch({
      type: LOADED_SESSION_DETAIL,
      payload: {
        session: results[0].data,
        speakers: _.tail(results).map(x => x.data),
      },
    });
  } catch (err) {
    dispatch({
      type: FAILED_LOADING_SESSION_DETAIL,
      payload: err,
    });
  }
};
