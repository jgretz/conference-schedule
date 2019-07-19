import _ from 'lodash';
import moment from 'moment';
import axios from 'axios';
import cheerio from 'cheerio';

const SESSIONS_URL = 'https://thestrangeloop.com/schedule.html';

const parseDay = ($, h3, table) => {
  const day = moment(h3.text(), 'dddd, MMMM DD');

  let sessions = [];
  let rooms = [];

  table.find('tbody tr').each((index, tr) => {
    if (index === 0) {
      rooms = $(tr)
        .children()
        .map((x, td) => $(td).text())
        .get()
        .slice(1);
    } else {
      const times = $(tr)
        .find('.time')
        .text()
        .split(' - ');

      const blockSessions = $(tr)
        .find('.room')
        .map((x, td) => {
          const titleLink = $(td).find('a');
          const speakers =
            $(td)
              .text()
              .split('\n')
              .map(_.trim)
              .filter(x => x.length > 0) |> _.last;

          return {
            descriptionLink: $(titleLink).attr('href'),
            title: $(titleLink).text(),
            speakers: speakers?.split(', ').map(_.trim) || [],

            startTime: `${day.format('YYYY-MM-DD')} ${times[0]}`,
            endTime: `${day.format('YYYY-MM-DD')} ${times[1]}`,

            roomId: rooms[x],
          };
        })
        .get()
        .filter(x => x.title.length > 0);

      sessions = [...sessions, ...blockSessions];
    }
  });

  return sessions;
};

const isComplete = tuple => tuple.h3 && tuple.table;

const parseData = $ => {
  const tuple = {};
  const days = [];

  $('#schedule')
    .children()
    .each((i, node) => {
      if (node.name === 'h3') {
        tuple.h3 = $(node);
      } else if (node.name === 'table') {
        tuple.table = $(node);
      }

      if (isComplete(tuple)) {
        days.push(parseDay($, tuple.h3, tuple.table));

        tuple.h3 = tuple.table = null;
      }
    });

  return days |> _.flatten;
};

export default async (req, res) => {
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
