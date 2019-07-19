import _ from 'lodash';
import moment from 'moment';

import {get} from '@truefit/http-utils';
import {SCHEDULE_URL} from '../constants';
import {
  LOADING_SCHEDULE_DATA,
  LOADED_SCHEDULE_DATA,
  FAILED_LOADING_SCHEDULE_DATA,
} from '../../schedule/constants/actions';

const ABS_DATE_TIME = 'YYYY-MM-DDTHH:mm:ss.SSSZ';

const parseSessions = sessionsList =>
  sessionsList.map(session => {
    const startTime = moment(session.starts_at, ABS_DATE_TIME).toISOString();
    const endTime = moment(session.ends_at, ABS_DATE_TIME).toISOString();
    const tags = [session.level, ...session.tags.split(', ')];

    return {
      id: session.id,
      title: session.title,
      description: session.body,

      startTime,
      endTime,

      roomId: session.room || 'TBD',
      speakers: session.presenter.name,
      tags,

      rawSpeaker: session.presenter,
    };
  });

const parseSpeakers = sessions => {
  const withDuplicates = sessions.map(s => s.rawSpeaker);
  const uniq = _.uniqBy(withDuplicates, s => s.name);

  return uniq.map(s => ({
    id: s.name,
    name: s.name,
    bio: s.bio,
  }));
};

const parseTags = sessions =>
  (sessions.map(s => s.tags) |> _.flatten |> _.uniq).map(s => ({
    id: s,
    name: s,
  }));

const parseRooms = sessions =>
  (sessions.map(s => s.roomId) |> _.uniq).map(room => ({
    id: room,
    name: room,
  }));

const mapToSharedModel = data => {
  const sessions = parseSessions(data);
  const speakers = parseSpeakers(sessions);
  const tags = parseTags(sessions);
  const rooms = parseRooms(sessions);

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
    const response = await get(SCHEDULE_URL);
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
