import axios from 'axios';
import cheerio from 'cheerio';

const SPEAKER_URL = 'https://sessionize.com/api/v2/ql2ir7mm/speaker?id=';

const parseData = $ => {
  const tagline = $('.sz-speaker__tagline').text();
  const bio = $('.sz-speaker__bio').text();
  const profilePicture = $('.sz-speaker__photo img').attr('src');

  return {
    tagline,
    bio,
    profilePicture,
  };
};

export default async (req, res) => {
  try {
    const html = await axios.post(`${SPEAKER_URL}${req.query.id}`);
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
