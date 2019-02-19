import _ from 'lodash';
import axios from 'axios';
import cheerio from 'cheerio';

const CODESTOCK_URL = 'http://codestock.org/2019-schedule/';

const createData = () => ({
  sessions: [],
  speakers: [],
  rooms: [],
  tags: [],
});

// dedup logic
const dedupData = data => {
  const speakers = _._.uniqBy(data.speakers, x => x.id);
  const rooms = _._.uniqBy(data.rooms, x => x.id);
  const tags = _._.uniqBy(data.tags, x => x.id);

  return {
    sessions: data.sessions,
    speakers,
    rooms,
    tags,
  };
};

// parsing logic
const parseSessions = (data, $, date, roomId, sessionsDom) => {
  sessionsDom.each((_, sessionDom) => {
    const session = $(sessionDom);

    const times = session
      .find('.sz-session__time')
      .text()
      .toUpperCase()
      .split(' - ');
    const startTime = times[0];
    const endTime = times[1];

    const title = session.find('.sz-session__title a').text();

    const sessionSpeakers = [];
    session.find('.sz-session__speakers li').each((_, s) => {
      const speaker = $(s);

      const speakerId = speaker.attr('data-speakerid');
      const speakerName = speaker.find('a').text();

      sessionSpeakers.push(speakerId);

      data.speakers.push({
        id: speakerId,
        name: speakerName,
      });
    });

    const sessionTags = [];
    session.find('.sz-session__tags li').each((_, t) => {
      const tag = $(t);

      const tagId = tag.attr('data-tagid');
      const tagText = t.children.map(x => x.data).join(' ');

      sessionTags.push(tagId);
      data.tags.push({
        id: tagId,
        name: tagText,
      });
    });

    data.sessions.push({
      roomId,
      startTime: `${date} ${startTime} EDT`,
      endTime: `${date} ${endTime} EDT`,
      title,
      speakers: sessionSpeakers,
      tags: sessionTags,
    });
  });
};

const parseTracks = (data, $) => day => {
  const date = $(day)
    .find('.sz-day__title')
    .text()
    .split(', ')[1];

  const tracks = $(day).find('.sz-track');

  tracks.each((_, t) => {
    const track = $(t);
    const roomId = track.attr('data-roomid');
    const room = track.find('h2').text();

    data.rooms.push({id: roomId, name: room});

    parseSessions(data, $, date, roomId, track.find('.sz-session__card'));
  });
};

const parseData = $ => {
  const allData = createData();
  const parse = parseTracks(allData, $);
  $('.sz-grid').each((_, day) => {
    parse(day);
  });

  const cleanData = dedupData(allData);

  return cleanData;
};

// http route
export default async (_, res) => {
  try {
    const html = await axios.get(CODESTOCK_URL);
    const $ = cheerio.load(html.data);
    const data = parseData($);

    res.json(data);
  } catch (err) {
    console.error(err); // eslint-disable-line
    res.status(500).send();
  }
};
