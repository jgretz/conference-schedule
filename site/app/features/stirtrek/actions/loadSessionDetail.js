import {get} from '@truefit/http-utils';

import {
  LOADING_SESSION_DETAIL,
  LOADED_SESSION_DETAIL,
  FAILED_LOADING_SESSION_DETAIL,
} from '../../schedule/constants/actions';

import {SESSION_URL} from '../constants';

export const loadSessionDetail = async (dispatch, store, [session]) => {
  dispatch({type: LOADING_SESSION_DETAIL});

  try {
    const response = await get(
      `${SESSION_URL}?id=${session.id}&url=${encodeURI(
        session.descriptionLink,
      )}`,
    );

    const {
      data: {description, speakerInfo},
    } = response;

    const speakers =
      session.speakers.length == 0
        ? []
        : [
            {
              id: session.speakers[0],
              ...speakerInfo,
            },
          ];

    dispatch({
      type: LOADED_SESSION_DETAIL,
      payload: {
        session: {id: session.id, description},
        speakers,
      },
    });
  } catch (err) {
    dispatch({
      type: FAILED_LOADING_SESSION_DETAIL,
      payload: err,
    });
  }
};
