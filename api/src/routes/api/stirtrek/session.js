import _ from 'lodash';
import axios from 'axios';
import cheerio from 'cheerio';

const BASE_URL = 'https://stirtrek.com/';

const parseDescriptionData = $ =>
  $('.abstractPanel div')
    .not('.comic-panel-header')
    .not('h2')
    .not('br')
    .text();

const parseSpeakerBio = $ =>
  $('.bioPanel')
    .contents()
    .text();

const parseSpeakerProfilePicture = $ =>
  $('.avatarPanel img.speakerImage').attr('src');

const parseData = $ => {
  const description = _.trim(parseDescriptionData($));

  const speakerInfo = {
    bio: _.trim(parseSpeakerBio($)).substring(31),
    profilePicture: `${BASE_URL}${parseSpeakerProfilePicture($)}`,
  };

  return {
    description,
    speakerInfo,
  };
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
