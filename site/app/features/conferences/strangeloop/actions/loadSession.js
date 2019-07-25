import {get} from '@truefit/http-utils';

import {
  LOADING_SESSION_DETAIL,
  LOADED_SESSION_DETAIL,
  FAILED_LOADING_SESSION_DETAIL,
} from 'schedule-actions';

import {SESSION_URL} from '../constants';

export const loadSession = session => async dispatch => {
  dispatch({type: LOADING_SESSION_DETAIL});

  try {
    const response = await get(
      `${SESSION_URL}?id=${session.id}&url=${encodeURI(
        session.descriptionLink,
      )}`,
    );

    const {
      data: {description, speakers},
    } = response;

    speakers.forEach(s => {
      s.id = s.name;
    });

    dispatch({
      type: LOADED_SESSION_DETAIL,
      payload: {
        session: {id: session.id, description},
        speakers,
      },
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: FAILED_LOADING_SESSION_DETAIL,
      payload: err,
    });
  }
};
