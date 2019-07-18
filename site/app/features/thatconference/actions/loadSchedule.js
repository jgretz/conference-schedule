import _ from 'lodash';
import moment from 'moment';

import {get} from '@truefit/http-utils';
import {SCHEDULE_URL, THAT_CONF_URL} from '../constants';
import {
  LOADING_SCHEDULE_DATA,
  LOADED_SCHEDULE_DATA,
  FAILED_LOADING_SCHEDULE_DATA,
} from '../../schedule/constants/actions';

const TC_DATE_FORMAT = 'YYYY-MM-DDTHH:mm:ss';

const flatten = days =>
  _.flattenDeep(
    days.map(day =>
      day.TimeSlots.map(time =>
        time.Sessions.map(session => ({
          ...session,
          time: time.Time,
          day: day.Day,
        })),
      ),
    ),
  );

const parseSessions = sessionsList =>
  sessionsList.map(session => {
    const startTime = moment(session.ScheduledDateTime, TC_DATE_FORMAT);
    const tags =
      [
        session.Level,
        session.PrimaryCategoryDisplayText,
        session.SecondaryCategoryDisplayText,
        ...session.Tags.map(t => t.Name),
      ].filter(x => x) |> _.uniq;

    return {
      id: session.Id,
      title: session.Title,
      description: session.DescriptionHtml,

      startTime: startTime.toISOString(),
      endTime: startTime.add(1, 'h').toISOString(),

      roomId: session.ScheduledRoom,
      speakers: session.Speakers.map(s => s.UserName),
      tags,

      rawSpeakers: session.Speakers,
    };
  });

const parseSpeakers = sessions => {
  const withDuplicates = sessions.map(s => s.rawSpeakers) |> _.flatten;
  const uniq = _.uniqBy(withDuplicates, s => s.UserName);

  return uniq.map(s => ({
    id: s.UserName,
    name: `${s.FirstName} ${s.LastName}`,
    bio: s.BiographyHtml,
    profilePicture: `${THAT_CONF_URL}${s.HeadShot}`,
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

const mapToSharedModel = ({ScheduledSessions}) => {
  const sessions = flatten(ScheduledSessions) |> parseSessions;
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
    dispatch({
      type: FAILED_LOADING_SCHEDULE_DATA,
      payload: err,
    });
  }
};
