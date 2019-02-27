import axios from 'axios';
import cheerio from 'cheerio';

const SESSION_URL = 'https://sessionize.com/api/v2/ql2ir7mm/session?id=';

const parseData = $ => {
  const description = $('.sz-session__description').text();

  return {
    description,
  };
};

export default async (req, res) => {
  try {
    const html = await axios.post(`${SESSION_URL}${req.query.id}`);
    const $ = cheerio.load(html.data);
    const data = parseData($);

    res.json({
      id: req.query.id,
      ...data,
    });
  } catch (err) {
    console.error(err); // eslint-disable-line
    res.status(500).send();
  }
};
