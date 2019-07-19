import axios from 'axios';
import cheerio from 'cheerio';

const BASE_URL = 'https://thestrangeloop.com';

const clean = string =>
  string
    .split('\n')
    .filter(x => x.length > 0)
    .join(' ');

const parseData = $ => {
  const session = {
    speakers: [],
  };

  let speaker = null;

  $('.session')
    .children()
    .each((i, node) => {
      switch (node.name) {
        default:
          break;

        case 'p':
          if (speaker) {
            speaker.bio = (speaker.bio || '') + $(node).text() |> clean;
          } else {
            session.description =
              (session.description || '') + $(node).text() |> clean;
          }
          break;

        case 'h3':
          if (speaker) {
            session.speakers.push(speaker);
          }

          speaker = {name: $(node).text()};
          break;

        case 'div':
          if ($(node).hasClass('img-speaker-lg')) {
            speaker.profilePicture = $(node)
              .find('img')
              .attr('src');
          }
          break;
      }
    });

  if (speaker) {
    session.speakers.push(speaker);
  }

  return session;
};

export default async (req, res) => {
  try {
    const url = decodeURI(req.query.url);
    const html = await axios.get(`${BASE_URL}${url}`);
    const $ = cheerio.load(html.data);
    const data = parseData($);

    res.json(data);
  } catch (err) {
    console.error(err); // eslint-disable-line
    res.status(500).send();
  }
};
