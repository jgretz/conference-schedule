import _ from 'lodash';
import axios from 'axios';

const SESSIONS_URL = 'http://schedule.codestock.org/parse.js';

// this file is a bit dirty because codestock changed their site at the last minute
// (ahh the joys of scraping data instead of getting to use an api). because I didn't
// want to lose my favorites but wanted to use my site, I had to update this in knoxville
// the night before the conference.

const createData = () => ({
  sessions: [],
  speakers: [],
  rooms: [],
  tags: [],
});

// dedup logic
const dedupData = data => {
  const sessions = _._.uniqBy(data.sessions, x => x.id);
  const speakers = _._.uniqBy(data.speakers, x => x.id);
  const rooms = _._.uniqBy(data.rooms, x => x.id);
  const tags = _._.uniqBy(data.tags, x => x.id);

  return {
    sessions,
    speakers,
    rooms,
    tags,
  };
};

// parsing logic
const parseSession = (summary, session) => {
  const tags = _.flatten(
    session.categories.map(category => category.categoryItems)
  );

  summary.sessions.push({
    id: session.id,
    roomId: session.roomId,
    startTime: session.startsAt,
    endTime: session.endsAt,
    title: session.title,
    description: session.description,
    speakers: session.speakers.map(s => s.id),
    tags: tags.map(t => t.id),
  });

  session.speakers.forEach(speaker => {
    summary.speakers.push(speaker);
  });

  tags.forEach(tag => {
    summary.tags.push(tag);
  });
};

const parseTracks = (summary, day) => {
  day.rooms.forEach(room => {
    summary.rooms.push({id: room.id, name: room.name});

    room.sessions.forEach(session => {
      parseSession(summary, session);
    });
  });
};

const parseData = data => {
  const summary = createData();

  data.forEach(day => {
    parseTracks(summary, day);
  });

  const cleanData = dedupData(summary);

  return cleanData;
};

const parseArray = rawJS => {
  const start = rawJS.indexOf('[', 0);
  const end = rawJS.indexOf('];', start);
  const jsonArray = rawJS.substring(start, end + 1);

  return JSON.parse(jsonArray);
};

// http route
export default async (_, res) => {
  try {
    const rawJS = await axios.get(SESSIONS_URL);
    const rawData = parseArray(rawJS.data);
    const data = parseData(rawData);

    res.json(data);
  } catch (err) {
    console.error(err); // eslint-disable-line
    res.status(500).send();
  }
};
