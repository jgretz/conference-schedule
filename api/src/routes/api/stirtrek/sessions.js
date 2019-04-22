import _ from 'lodash';
import moment from 'moment';
import axios from 'axios';
import cheerio from 'cheerio';

const SESSIONS_URL = 'https://stirtrek.com/Schedule/';

const createData = () => ({
  sessions: [],
  speakers: [],
  rooms: [],
  tags: [],
});

// helpers
const findOrCreate = (name, array) => {
  let obj = _.find(array, x => x.name === name);
  if (obj) {
    return obj;
  }

  obj = {id: array.length, name};
  array.push(obj);

  return obj;
};

// parse sessions
const FORMAT = 'MM-DD-YY H:mm a EST';
const DATE = '04-26-19';
const times = (cell, session) => {
  const time = cell.text();
  const startTime = moment(`${DATE} ${time}`, FORMAT);

  session.startTime = startTime.toISOString(true);
  session.endTime = startTime.add(1, 'h').toISOString(true);
};

const title = (cell, session) => {
  const link = cell.find('a');
  if (link.length === 0) {
    session.title = _.trim(cell.text());
    return;
  }

  session.title = _.trim(link.text());
  session.descriptionLink = link.attr('href');
};

const speaker = (cell, session, {speakers}) => {
  const link = cell.find('a');
  if (link.length === 0) {
    session.speakers = [];
    return;
  }

  const name = _.trim(link.text());
  const speaker = findOrCreate(name, speakers);
  speaker.speakerLink = link.attr('href');

  session.speakers = [speaker.id];
};

const tags = (cell, session, {tags}) => {
  const tagNames = cell.text().split(' / ');
  const tagIds = tagNames.map(name => {
    const tag = findOrCreate(name, tags);
    return tag.id;
  });

  session.tags = tagIds;
};

const room = (cell, session, {rooms}) => {
  const name = cell.text();
  const room = findOrCreate(name, rooms);

  session.roomId = room.id;
};

const CELL_MAP = [times, title, speaker, tags, room];
const parseSessions = (data, $) => {
  $('#scheduleTable tr').each((rIndex, row) => {
    const session = {};
    data.sessions.push(session);

    $(row)
      .find('td')
      .each((cIndex, cell) => {
        CELL_MAP[cIndex]($(cell), session, data);
      });
  });

  data.sessions = data.sessions.filter(s => s.title);
};

const parseData = $ => {
  const data = createData();
  parseSessions(data, $);

  return data;
};

// http route
export default async (_, res) => {
  try {
    const html = await axios.get(SESSIONS_URL);
    const $ = cheerio.load(html.data);
    const data = parseData($);

    res.json(data);
  } catch (err) {
    console.error(err); // eslint-disable-line
    res.status(500).send();
  }
};
